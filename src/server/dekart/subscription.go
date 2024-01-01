package dekart

import (
	"context"
	"database/sql"
	"dekart/src/proto"
	"dekart/src/server/user"
	"os"
	"strings"

	"github.com/rs/zerolog/log"
	"github.com/stripe/stripe-go/v76"
	"github.com/stripe/stripe-go/v76/checkout/session"
	"github.com/stripe/stripe-go/v76/customer"

	"github.com/google/uuid"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (s Server) getSubscription(
	ctx context.Context,
	email string,
) (*proto.Subscription, error) {
	var createdAt sql.NullTime
	var customerID sql.NullString
	var planType proto.PlanType
	var organizationID string
	var cancelled bool
	err := s.db.QueryRowContext(ctx, `
		SELECT
			s.created_at,
			s.customer_id,
			s.plan_type,
			s.cancelled,
			s.organization_id
		FROM
			subscription_log AS s
		JOIN
			(
				SELECT * FROM organization_log WHERE email = $1 ORDER BY created_at DESC LIMIT 1
			) AS l ON s.organization_id = l.organization_id AND l.user_status = 2
		JOIN
			organizations AS o ON s.organization_id = o.id
		ORDER BY
			s.created_at DESC
		LIMIT 1;
	`, email).Scan(&createdAt, &customerID, &planType, &cancelled, &organizationID)

	if err != nil {
		if err == sql.ErrNoRows {
			// No subscription
			return &proto.Subscription{
				Active: false,
			}, nil
		}
		log.Err(err).Send()
		return &proto.Subscription{
			Active: false,
		}, err
	}

	if !cancelled && customerID.Valid {
		stripe.Key = os.Getenv("STRIPE_SECRET_KEY")
		params := &stripe.CustomerParams{}
		params.AddExpand("subscriptions")
		c, err := customer.Get(customerID.String, params)

		if err != nil {
			log.Err(err).Send()
			return &proto.Subscription{
				Active:    false,
				UpdatedAt: createdAt.Time.Unix(),
			}, err
		}
		if c.Subscriptions == nil {
			return &proto.Subscription{
				Active:    false,
				UpdatedAt: createdAt.Time.Unix(),
			}, nil
		}
		for _, subscription := range c.Subscriptions.Data {
			if subscription.Status == "active" {
				return &proto.Subscription{
					Active:         true,
					PlanType:       planType,
					UpdatedAt:      createdAt.Time.Unix(),
					OrganizationId: organizationID,
				}, nil
			}
		}
		// no active subscription
		return &proto.Subscription{
			Active:    false,
			UpdatedAt: createdAt.Time.Unix(),
		}, nil
	}
	return &proto.Subscription{
		Active:         !cancelled,
		PlanType:       planType,
		UpdatedAt:      createdAt.Time.Unix(),
		OrganizationId: organizationID,
	}, nil
}

type ContextKey string

const contextKey ContextKey = "subscription"

type SubscriptionInfo struct {
	Active         bool
	OrganizationId string
}

func (s Server) SetSubscriptionContext(ctx context.Context) context.Context {
	claims := user.GetClaims(ctx)
	if claims == nil {
		return ctx
	}
	sub, err := s.getSubscription(ctx, claims.Email)
	if err != nil {
		log.Err(err).Send()
		return ctx
	}
	if sub == nil {
		ctx = context.WithValue(ctx, contextKey, SubscriptionInfo{
			Active: false,
		})
	} else {
		ctx = context.WithValue(ctx, contextKey, SubscriptionInfo{
			Active:         sub.Active,
			OrganizationId: sub.OrganizationId,
		})
	}
	return ctx
}

func checkSubscription(ctx context.Context) SubscriptionInfo {
	sub, ok := ctx.Value(contextKey).(SubscriptionInfo)
	if !ok {
		log.Error().Msg("SubscriptionInfo not found in context")
		return SubscriptionInfo{
			Active: false,
		}
	}
	return sub
}

func (s Server) createCheckoutSession(ctx context.Context, req *proto.CreateSubscriptionRequest) (*stripe.CheckoutSession, error) {
	claims := user.GetClaims(ctx)
	stripe.Key = os.Getenv("STRIPE_SECRET_KEY")
	customerParams := &stripe.CustomerParams{
		Email: stripe.String(claims.Email),
	}
	customer, err := customer.New(customerParams)
	if err != nil {
		log.Err(err).Send()
		return nil, err
	}
	org, err := s.createOrganization(ctx, true)
	if err != nil {
		log.Err(err).Send()
		return nil, status.Error(codes.Internal, err.Error())
	}
	_, err = s.db.ExecContext(ctx, `insert into subscription_log (organization_id, plan_type, customer_id) values ($1, $2, $3)`,
		org.Id,
		req.PlanType,
		customer.ID,
	)
	if err != nil {
		log.Err(err).Send()
		return nil, status.Error(codes.Internal, err.Error())
	}

	params := &stripe.CheckoutSessionParams{
		Customer: stripe.String(customer.ID),
		Mode:     stripe.String(string(stripe.CheckoutSessionModeSubscription)),
		LineItems: []*stripe.CheckoutSessionLineItemParams{
			{
				Price:    stripe.String(os.Getenv("STRIPE_PRICE_ID")),
				Quantity: stripe.Int64(1),
			},
		},
		SuccessURL: stripe.String(req.UiUrl),
		CancelURL:  stripe.String(req.UiUrl),
	}

	return session.New(params)

}

func (s Server) GetSubscription(ctx context.Context, req *proto.GetSubscriptionRequest) (*proto.GetSubscriptionResponse, error) {
	claims := user.GetClaims(ctx)
	if claims == nil {
		return nil, Unauthenticated
	}
	sub, err := s.getSubscription(ctx, claims.Email)
	if err != nil {
		log.Err(err).Send()
		return nil, status.Error(codes.Internal, err.Error())
	}
	return &proto.GetSubscriptionResponse{
		Subscription: sub,
	}, nil
}

func (s Server) CancelSubscription(ctx context.Context, req *proto.CancelSubscriptionRequest) (*proto.CancelSubscriptionResponse, error) {
	claims := user.GetClaims(ctx)
	if claims == nil {
		return nil, Unauthenticated
	}
	_, err := s.db.ExecContext(ctx, `
			INSERT INTO subscription_log (organization_id, cancelled)
			SELECT organization_id, true
			FROM organization_log
			WHERE email = $1
			ORDER BY created_at DESC
			LIMIT 1
		`,
		claims.Email,
	)
	if err != nil {
		log.Err(err).Send()
		return nil, status.Error(codes.Internal, err.Error())
	}
	s.userStreams.Ping([]string{claims.Email})
	return &proto.CancelSubscriptionResponse{}, nil
}

// func (s Server) getOrganization(ctx context.Context) (*proto.Organization, error) {
// 	claims := user.GetClaims(ctx)
// 	var organization proto.Organization
// 	err := s.db.QueryRowContext(ctx, `
// 		SELECT o.id, o.name, o.personal
// 		FROM organizations o
// 		INNER JOIN organization_log ol ON o.id = ol.organization_id
// 		WHERE ol.email = $1 AND ol.active = true
// 		ORDER BY ol.created_at DESC
// 		LIMIT 1
// 	`, claims.Email).Scan(&organization.Id, &organization.Name, &organization.Personal)
// 	if err != nil {
// 		if err == sql.ErrNoRows {
// 			return nil, status.Error(codes.NotFound, "Organization not found")
// 		}
// 		log.Err(err).Send()
// 		return nil, status.Error(codes.Internal, err.Error())
// 	}

// 	return &organization, nil
// }

func (s Server) createOrganization(ctx context.Context, personal bool) (*proto.Organization, error) {
	claims := user.GetClaims(ctx)
	name := strings.Split(claims.Email, "@")[0]
	organizationID := uuid.New()
	_, err := s.db.ExecContext(ctx, `
		INSERT INTO organizations (id, name, personal)
		VALUES ($1, $2, $3)
	`, organizationID, name, personal)
	if err != nil {
		log.Err(err).Send()
		return nil, status.Error(codes.Internal, err.Error())
	}
	_, err = s.db.ExecContext(ctx, `
		INSERT INTO organization_log (organization_id, email, user_status, authored_by)
		VALUES ($1, $2, $3, $4)
	`, organizationID, claims.Email, proto.UserStatus_USER_STATUS_ACTIVE, claims.Email)
	if err != nil {
		log.Err(err).Send()
		return nil, status.Error(codes.Internal, err.Error())
	}
	return &proto.Organization{
		Id:       organizationID.String(),
		Name:     claims.Email,
		Personal: personal,
	}, nil
}

func (s Server) CreateSubscription(ctx context.Context, req *proto.CreateSubscriptionRequest) (*proto.CreateSubscriptionResponse, error) {
	claims := user.GetClaims(ctx)
	if claims == nil {
		return nil, Unauthenticated
	}
	switch req.PlanType {
	case proto.PlanType_TYPE_PERSONAL:
		org, err := s.createOrganization(ctx, true)
		if err != nil {
			log.Err(err).Send()
			return nil, status.Error(codes.Internal, err.Error())
		}
		_, err = s.db.ExecContext(ctx, `insert into subscription_log (organization_id, plan_type) values ($1, $2)`,
			org.Id,
			req.PlanType,
		)
		if err != nil {
			log.Err(err).Send()
			return nil, status.Error(codes.Internal, err.Error())
		}
		s.userStreams.Ping([]string{claims.Email})
		return &proto.CreateSubscriptionResponse{
			RedirectUrl: "/", // redirect to home page
		}, nil
	case proto.PlanType_TYPE_TEAM:
		session, err := s.createCheckoutSession(ctx, req)
		if err != nil {
			log.Err(err).Send()
			return nil, status.Error(codes.Internal, err.Error())
		}
		return &proto.CreateSubscriptionResponse{
			RedirectUrl: session.URL,
		}, nil
	}
	return nil, status.Error(codes.InvalidArgument, "Unknown plan type")
}
