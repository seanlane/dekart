package dekart

import (
	"context"
	"database/sql"
	"dekart/src/proto"
	"dekart/src/server/storage"
	"dekart/src/server/user"
	"os"
	"time"

	"github.com/rs/zerolog/log"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (s Server) TestConnection(ctx context.Context, req *proto.TestConnectionRequest) (*proto.TestConnectionResponse, error) {
	claims := user.GetClaims(ctx)
	if claims == nil {
		return nil, Unauthenticated
	}
	res, err := s.jobs.TestConnection(ctx, req)
	if err != nil {
		log.Err(err).Send()
		return nil, status.Error(codes.Internal, err.Error())
	}
	if !res.Success {
		return res, nil
	}
	if req.Connection.CloudStorageBucket == "" {
		// if no bucket is provided, temp storage is used
		return &proto.TestConnectionResponse{
			Success: true,
		}, nil
	}
	return storage.TestConnection(ctx, req.Connection)
}

func (s Server) getBucketNameFromConnection(conn *proto.Connection) string {
	if conn == nil {
		return storage.GetDefaultBucketName()
	}

	bucketName := conn.CloudStorageBucket

	return bucketName
}

func (s Server) getConnectionFromDatasetID(ctx context.Context, datasetID string) (*proto.Connection, error) {
	var connectionID sql.NullString
	err := s.db.QueryRowContext(ctx,
		`select
			connection_id
		from datasets
		where id=$1 limit 1`,
		datasetID,
	).Scan(&connectionID)
	if err != nil {
		if err == sql.ErrNoRows {
			// legacy query
			return s.getConnection(ctx, "")
		}
		log.Err(err).Send()
		return nil, err
	}
	return s.getConnection(ctx, connectionID.String)
}

func (s Server) getConnectionFromQueryID(ctx context.Context, queryID string) (*proto.Connection, error) {
	var connectionID sql.NullString
	err := s.db.QueryRowContext(ctx,
		`select
			connection_id
		from queries join datasets on (queries.id=datasets.query_id)
		where queries.id=$1 limit 1`,
		queryID,
	).Scan(&connectionID)
	if err != nil {
		if err == sql.ErrNoRows {
			// legacy query
			return s.getConnection(ctx, "")
		}
		log.Err(err).Send()
		return nil, err
	}
	return s.getConnection(ctx, connectionID.String)
}

func (s Server) getConnectionFromFileID(ctx context.Context, fileID string) (*proto.Connection, error) {
	var connectionID sql.NullString
	err := s.db.QueryRowContext(ctx,
		`select
			connection_id
		from files join datasets on (files.id=datasets.file_id)
		where files.id=$1 limit 1`,
		fileID,
	).Scan(&connectionID)
	if err != nil {
		log.Err(err).Send()
		return nil, err
	}
	return s.getConnection(ctx, connectionID.String)
}

// getConnection gets connection by id; it does not check if user has access to it or if it is archived
func (s Server) getConnection(ctx context.Context, connectionID string) (*proto.Connection, error) {

	if connectionID == "default" || connectionID == "" {
		return &proto.Connection{
			Id:                 "default",
			ConnectionName:     "default",
			CloudStorageBucket: storage.GetDefaultBucketName(),
			BigqueryProjectId:  os.Getenv("DEKART_BIGQUERY_PROJECT_ID"),
			IsDefault:          true,
		}, nil
	}

	res, err := s.db.QueryContext(ctx, `
		select
			id,
			connection_name,
			bigquery_project_id,
			cloud_storage_bucket,
			(select count(*) from datasets where connection_id=connections.id) as dataset_count
		from connections where id=$1 limit 1`,
		connectionID,
	)
	if err != nil {
		log.Err(err).Send()
		return nil, err
	}
	defer res.Close()
	connection := proto.Connection{}
	for res.Next() {
		ID := sql.NullString{}
		bigqueryProjectId := sql.NullString{}
		cloudStorageBucket := sql.NullString{}
		err := res.Scan(
			&ID,
			&connection.ConnectionName,
			&bigqueryProjectId,
			&cloudStorageBucket,
			&connection.DatasetCount,
		)
		connection.Id = ID.String
		connection.BigqueryProjectId = bigqueryProjectId.String
		connection.CloudStorageBucket = cloudStorageBucket.String
		if connection.CloudStorageBucket != "" {
			connection.CanStoreFiles = true
		}
		if err != nil {
			log.Err(err).Send()
			return nil, status.Error(codes.Internal, err.Error())
		}
	}
	if connection.Id == "" {
		log.Warn().Msgf("connection not found id:%s", connectionID)
		return nil, nil
	}
	return &connection, nil
}

// getConnections list for connections created by user
func (s Server) getConnections(ctx context.Context) ([]*proto.Connection, error) {
	connections := make([]*proto.Connection, 0)
	rows, err := s.db.QueryContext(ctx,
		`select
			id,
			connection_name,
			bigquery_project_id,
			cloud_storage_bucket,
			is_default,
			created_at,
			updated_at,
			author_email,
			(select count(*) from datasets where connection_id=connections.id) as dataset_count
		from connections where archived=false and workspace_id=$1 order by created_at desc`,
		checkWorkspace(ctx).ID,
	)
	if err != nil {
		if err == context.Canceled {
			return nil, err
		}
		log.Fatal().Err(err).Msg("select from connections failed")
	}
	defer rows.Close()
	lastDefault := time.Time{}
	lastDefaultIndex := -1
	for rows.Next() {
		connection := proto.Connection{}
		ID := sql.NullString{}
		bigqueryProjectId := sql.NullString{}
		cloudStorageBucket := sql.NullString{}
		isDefault := false
		createdAt := time.Time{}
		updatedAt := time.Time{}
		err := rows.Scan(
			&ID,
			&connection.ConnectionName,
			&bigqueryProjectId,
			&cloudStorageBucket,
			&isDefault,
			&createdAt,
			&updatedAt,
			&connection.AuthorEmail,
			&connection.DatasetCount,
		)
		if err != nil {
			log.Fatal().Err(err).Msg("scan failed")
		}
		if isDefault {
			if lastDefaultIndex == -1 {
				lastDefaultIndex = len(connections)
			}
			// is_default is not a unique constraint, so there can be multiple default connections
			// this is design decision to avoid race conditions when updating default connection
			if lastDefault.Before(updatedAt) {
				lastDefault = updatedAt
				lastDefaultIndex = len(connections)
			}
		}
		connection.Id = ID.String
		connection.BigqueryProjectId = bigqueryProjectId.String
		connection.CloudStorageBucket = cloudStorageBucket.String
		connection.UpdatedAt = updatedAt.Unix()
		connection.CreatedAt = createdAt.Unix()
		if connection.CloudStorageBucket != "" {
			connection.CanStoreFiles = true
		}
		connections = append(connections, &connection)
	}

	if lastDefaultIndex != -1 {
		connections[lastDefaultIndex].IsDefault = true
	} else if len(connections) > 0 {
		// if no default connection is set, set the first one as default
		connections[len(connections)-1].IsDefault = true
	}

	return connections, nil

}

func (s Server) getDefaultConnection(ctx context.Context) (*proto.Connection, error) {
	claims := user.GetClaims(ctx)
	if claims == nil {
		return nil, Unauthenticated
	}
	connections, err := s.getConnections(ctx)
	if err != nil {
		log.Err(err).Send()
		return nil, err
	}
	for _, connection := range connections {
		if connection.IsDefault {
			return connection, nil
		}
	}
	return nil, nil
}

func (s Server) SetDefaultConnection(ctx context.Context, req *proto.SetDefaultConnectionRequest) (*proto.SetDefaultConnectionResponse, error) {
	claims := user.GetClaims(ctx)
	if claims == nil {
		return nil, Unauthenticated
	}
	_, err := s.db.ExecContext(ctx,
		`update connections set
			is_default=true,
			updated_at=now()
		where id=$1`,
		req.ConnectionId,
	)
	if err != nil {
		log.Err(err).Send()
		return nil, err
	}
	s.userStreams.PingAll()
	return &proto.SetDefaultConnectionResponse{}, nil
}

func (s Server) UpdateConnection(ctx context.Context, req *proto.UpdateConnectionRequest) (*proto.UpdateConnectionResponse, error) {
	claims := user.GetClaims(ctx)
	if claims == nil {
		return nil, Unauthenticated
	}
	res, err := s.db.ExecContext(ctx,
		`update connections set
			connection_name=$1,
			bigquery_project_id=$2,
			cloud_storage_bucket=$3,
			updated_at=now()
		where id=$4`,
		req.Connection.ConnectionName,
		req.Connection.BigqueryProjectId,
		req.Connection.CloudStorageBucket,
		req.Connection.Id,
	)
	if err != nil {
		log.Err(err).Send()
		return nil, err
	}
	rowsAffected, err := res.RowsAffected()
	if err != nil {
		log.Err(err).Send()
		return nil, err
	}
	if rowsAffected == 0 {
		return nil, status.Error(codes.NotFound, "connection not found")
	}
	s.userStreams.PingAll()
	return &proto.UpdateConnectionResponse{
		Connection: req.Connection,
	}, nil
}

func (s Server) getReportsAffectedByConnectionArchive(ctx context.Context, connectionID string) ([]string, error) {
	reportIDs := make([]string, 0)
	rows, err := s.db.QueryContext(ctx,
		`select
			reports.id
		from reports
		join datasets on (reports.id=datasets.report_id)
		where datasets.connection_id=$1 and datasets.file_id is null and datasets.query_id is null`,
		connectionID,
	)
	if err != nil {
		log.Err(err).Send()
		return nil, err
	}
	defer rows.Close()
	for rows.Next() {
		reportID := sql.NullString{}
		err := rows.Scan(
			&reportID,
		)
		if err != nil {
			log.Err(err).Send()
			return nil, err
		}
		reportIDs = append(reportIDs, reportID.String)
	}
	return reportIDs, nil
}

func (s Server) ArchiveConnection(ctx context.Context, req *proto.ArchiveConnectionRequest) (*proto.ArchiveConnectionResponse, error) {
	claims := user.GetClaims(ctx)
	if claims == nil {
		return nil, Unauthenticated
	}
	workspaceInfo := checkWorkspace(ctx)
	res, err := s.db.ExecContext(ctx,
		`update connections set
			archived=true,
			updated_at=now()
		where id=$1 and author_email=$2 and workspace_id=$3`,
		req.ConnectionId,
		claims.Email,
		workspaceInfo.ID,
	)
	if err != nil {
		log.Err(err).Send()
		return nil, err
	}
	rowsAffected, err := res.RowsAffected()
	if err != nil {
		log.Err(err).Send()
		return nil, err
	}
	if rowsAffected == 0 {
		return nil, status.Error(codes.NotFound, "connection not found")
	}
	reports, err := s.getReportsAffectedByConnectionArchive(ctx, req.ConnectionId)

	if err != nil {
		log.Err(err).Send()
		return nil, err
	}

	_, err = s.db.ExecContext(ctx,
		`update datasets set
			connection_id=null,
			updated_at=now()
		where connection_id=$1 and file_id is null and query_id is null`,
		req.ConnectionId,
	)

	if err != nil {
		log.Err(err).Send()
		return nil, err
	}

	s.userStreams.PingAll()
	s.reportStreams.PingAll(reports)
	return &proto.ArchiveConnectionResponse{}, nil
}

func (s Server) GetConnectionList(ctx context.Context, req *proto.GetConnectionListRequest) (*proto.GetConnectionListResponse, error) {
	claims := user.GetClaims(ctx)
	if claims == nil {
		return nil, Unauthenticated
	}
	if checkWorkspace(ctx).ID == "" {
		log.Warn().Msg("workspace not found when getting connection list")
		return nil, status.Error(codes.NotFound, "workspace not found")
	}
	connections, err := s.getConnections(ctx)
	if err != nil {
		log.Err(err).Send()
		return nil, status.Error(codes.Internal, err.Error())
	}
	return &proto.GetConnectionListResponse{
		Connections: connections,
	}, nil
}

func (s Server) getLastConnectionUpdate(ctx context.Context) (int64, error) {
	claims := user.GetClaims(ctx)
	if claims == nil {
		return 0, Unauthenticated
	}
	var lastConnectionUpdateDate sql.NullTime
	err := s.db.QueryRowContext(ctx,
		`select
			max(updated_at)
		from connections`,
	).Scan(&lastConnectionUpdateDate)
	lastConnectionUpdate := lastConnectionUpdateDate.Time.Unix()
	if err != nil {
		log.Err(err).Send()
		return 0, err
	}
	return lastConnectionUpdate, nil
}

func (s Server) CreateConnection(ctx context.Context, req *proto.CreateConnectionRequest) (*proto.CreateConnectionResponse, error) {
	claims := user.GetClaims(ctx)
	if claims == nil {
		return nil, Unauthenticated
	}
	if checkWorkspace(ctx).ID == "" {
		return nil, status.Error(codes.NotFound, "workspace not found")
	}
	id := newUUID()
	_, err := s.db.ExecContext(ctx,
		"INSERT INTO connections (id, connection_name,  author_email, workspace_id) VALUES ($1, $2, $3, $4)",
		id,
		req.ConnectionName,
		claims.Email,
		checkWorkspace(ctx).ID,
	)
	if err != nil {
		log.Err(err).Send()
		return nil, err
	}

	s.userStreams.PingAll()

	return &proto.CreateConnectionResponse{
		Connection: &proto.Connection{
			Id:             id,
			ConnectionName: req.ConnectionName,
		},
	}, nil
}
