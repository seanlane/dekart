package dekart

import (
	"context"
	"dekart/src/proto"
	"fmt"
	"time"

	"github.com/google/uuid"
	"github.com/rs/zerolog/log"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (s Server) sendReportMessage(reportID string, srv proto.Dekart_GetReportStreamServer) error {
	ctx := srv.Context()
	reportRows, err := s.Db.QueryContext(ctx,
		"select id from reports where id=$1 limit 1",
		reportID,
	)
	if err != nil {
		log.Err(err).Send()
		return status.Errorf(codes.Internal, err.Error())
	}
	defer reportRows.Close()
	res := proto.ReportStreamResponse{
		Report: &proto.Report{},
	}
	for reportRows.Next() {
		err = reportRows.Scan(&res.Report.Id)
		if err != nil {
			log.Err(err).Send()
			return status.Errorf(codes.Internal, err.Error())
		}
	}
	if res.Report.Id == "" {
		err := fmt.Errorf("Report %s not found", res.Report.Id)
		log.Warn().Err(err).Send()
		return status.Errorf(codes.NotFound, err.Error())
	}
	queryRows, err := s.Db.QueryContext(ctx,
		`select id, query_text, job_status from queries where report_id=$1`,
		res.Report.Id,
	)
	if err != nil {
		log.Err(err).Send()
		return status.Errorf(codes.Internal, err.Error())
	}
	defer queryRows.Close()
	res.Queries = make([]*proto.Query, 0)
	for queryRows.Next() {
		query := proto.Query{
			ReportId: res.Report.Id,
		}
		if err := queryRows.Scan(
			&query.Id,
			&query.QueryText,
			&query.JobStatus,
		); err != nil {
			log.Err(err).Send()
			return status.Errorf(codes.Internal, err.Error())
		}
		res.Queries = append(res.Queries, &query)
	}
	err = srv.Send(&res)
	if err != nil {
		log.Err(err).Send()
		return err
	}
	return nil

}

// GetReportStream which sends report and queries on every update
func (s Server) GetReportStream(req *proto.ReportStreamRequest, srv proto.Dekart_GetReportStreamServer) error {
	if req.Report == nil {
		return status.Errorf(codes.InvalidArgument, "req.Report == nil")
	}

	streamID, err := uuid.NewRandom()
	if err != nil {
		log.Err(err).Send()
		return status.Error(codes.Internal, err.Error())
	}
	ping := s.ReportStreams.Regter(req.Report.Id, streamID.String())
	defer s.ReportStreams.Deregister(req.Report.Id, streamID.String())

	err = s.sendReportMessage(req.Report.Id, srv)
	if err != nil {
		return err
	}

	ctx, cancel := context.WithTimeout(srv.Context(), 10*time.Second)
	defer cancel()

	for {
		select {
		case <-ping:
			err := s.sendReportMessage(req.Report.Id, srv)
			if err != nil {
				return err
			}
		case <-ctx.Done():
			return nil
		}
	}
}
