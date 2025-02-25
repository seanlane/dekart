// package: 
// file: proto/dekart.proto

import * as proto_dekart_pb from "../proto/dekart_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DekartCreateReport = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.CreateReportRequest;
  readonly responseType: typeof proto_dekart_pb.CreateReportResponse;
};

type DekartForkReport = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.ForkReportRequest;
  readonly responseType: typeof proto_dekart_pb.ForkReportResponse;
};

type DekartUpdateReport = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.UpdateReportRequest;
  readonly responseType: typeof proto_dekart_pb.UpdateReportResponse;
};

type DekartArchiveReport = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.ArchiveReportRequest;
  readonly responseType: typeof proto_dekart_pb.ArchiveReportResponse;
};

type DekartSetDiscoverable = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.SetDiscoverableRequest;
  readonly responseType: typeof proto_dekart_pb.SetDiscoverableResponse;
};

type DekartPublishReport = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.PublishReportRequest;
  readonly responseType: typeof proto_dekart_pb.PublishReportResponse;
};

type DekartAllowExportDatasets = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.AllowExportDatasetsRequest;
  readonly responseType: typeof proto_dekart_pb.AllowExportDatasetsResponse;
};

type DekartAddReadme = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.AddReadmeRequest;
  readonly responseType: typeof proto_dekart_pb.AddReadmeResponse;
};

type DekartRemoveReadme = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.RemoveReadmeRequest;
  readonly responseType: typeof proto_dekart_pb.RemoveReadmeResponse;
};

type DekartCreateDataset = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.CreateDatasetRequest;
  readonly responseType: typeof proto_dekart_pb.CreateDatasetResponse;
};

type DekartRemoveDataset = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.RemoveDatasetRequest;
  readonly responseType: typeof proto_dekart_pb.RemoveDatasetResponse;
};

type DekartUpdateDatasetName = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.UpdateDatasetNameRequest;
  readonly responseType: typeof proto_dekart_pb.UpdateDatasetNameResponse;
};

type DekartUpdateDatasetConnection = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.UpdateDatasetConnectionRequest;
  readonly responseType: typeof proto_dekart_pb.UpdateDatasetConnectionResponse;
};

type DekartCreateFile = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.CreateFileRequest;
  readonly responseType: typeof proto_dekart_pb.CreateFileResponse;
};

type DekartCreateQuery = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.CreateQueryRequest;
  readonly responseType: typeof proto_dekart_pb.CreateQueryResponse;
};

type DekartRunQuery = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.RunQueryRequest;
  readonly responseType: typeof proto_dekart_pb.RunQueryResponse;
};

type DekartRunAllQueries = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.RunAllQueriesRequest;
  readonly responseType: typeof proto_dekart_pb.RunAllQueriesResponse;
};

type DekartCancelJob = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.CancelJobRequest;
  readonly responseType: typeof proto_dekart_pb.CancelJobResponse;
};

type DekartGetEnv = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.GetEnvRequest;
  readonly responseType: typeof proto_dekart_pb.GetEnvResponse;
};

type DekartGetReportStream = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof proto_dekart_pb.ReportStreamRequest;
  readonly responseType: typeof proto_dekart_pb.ReportStreamResponse;
};

type DekartGetReportListStream = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof proto_dekart_pb.ReportListRequest;
  readonly responseType: typeof proto_dekart_pb.ReportListResponse;
};

type DekartGetUserStream = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof proto_dekart_pb.GetUserStreamRequest;
  readonly responseType: typeof proto_dekart_pb.GetUserStreamResponse;
};

type DekartGetUsage = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.GetUsageRequest;
  readonly responseType: typeof proto_dekart_pb.GetUsageResponse;
};

type DekartCreateConnection = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.CreateConnectionRequest;
  readonly responseType: typeof proto_dekart_pb.CreateConnectionResponse;
};

type DekartGetGcpProjectList = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.GetGcpProjectListRequest;
  readonly responseType: typeof proto_dekart_pb.GetGcpProjectListResponse;
};

type DekartUpdateConnection = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.UpdateConnectionRequest;
  readonly responseType: typeof proto_dekart_pb.UpdateConnectionResponse;
};

type DekartArchiveConnection = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.ArchiveConnectionRequest;
  readonly responseType: typeof proto_dekart_pb.ArchiveConnectionResponse;
};

type DekartGetConnectionList = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.GetConnectionListRequest;
  readonly responseType: typeof proto_dekart_pb.GetConnectionListResponse;
};

type DekartTestConnection = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.TestConnectionRequest;
  readonly responseType: typeof proto_dekart_pb.TestConnectionResponse;
};

type DekartSetDefaultConnection = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.SetDefaultConnectionRequest;
  readonly responseType: typeof proto_dekart_pb.SetDefaultConnectionResponse;
};

type DekartRespondToInvite = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.RespondToInviteRequest;
  readonly responseType: typeof proto_dekart_pb.RespondToInviteResponse;
};

type DekartCreateSubscription = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.CreateSubscriptionRequest;
  readonly responseType: typeof proto_dekart_pb.CreateSubscriptionResponse;
};

type DekartGetStripePortalSession = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.GetStripePortalSessionRequest;
  readonly responseType: typeof proto_dekart_pb.GetStripePortalSessionResponse;
};

type DekartCreateWorkspace = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.CreateWorkspaceRequest;
  readonly responseType: typeof proto_dekart_pb.CreateWorkspaceResponse;
};

type DekartUpdateWorkspace = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.UpdateWorkspaceRequest;
  readonly responseType: typeof proto_dekart_pb.UpdateWorkspaceResponse;
};

type DekartGetWorkspace = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.GetWorkspaceRequest;
  readonly responseType: typeof proto_dekart_pb.GetWorkspaceResponse;
};

type DekartUpdateWorkspaceUser = {
  readonly methodName: string;
  readonly service: typeof Dekart;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_dekart_pb.UpdateWorkspaceUserRequest;
  readonly responseType: typeof proto_dekart_pb.UpdateWorkspaceUserResponse;
};

export class Dekart {
  static readonly serviceName: string;
  static readonly CreateReport: DekartCreateReport;
  static readonly ForkReport: DekartForkReport;
  static readonly UpdateReport: DekartUpdateReport;
  static readonly ArchiveReport: DekartArchiveReport;
  static readonly SetDiscoverable: DekartSetDiscoverable;
  static readonly PublishReport: DekartPublishReport;
  static readonly AllowExportDatasets: DekartAllowExportDatasets;
  static readonly AddReadme: DekartAddReadme;
  static readonly RemoveReadme: DekartRemoveReadme;
  static readonly CreateDataset: DekartCreateDataset;
  static readonly RemoveDataset: DekartRemoveDataset;
  static readonly UpdateDatasetName: DekartUpdateDatasetName;
  static readonly UpdateDatasetConnection: DekartUpdateDatasetConnection;
  static readonly CreateFile: DekartCreateFile;
  static readonly CreateQuery: DekartCreateQuery;
  static readonly RunQuery: DekartRunQuery;
  static readonly RunAllQueries: DekartRunAllQueries;
  static readonly CancelJob: DekartCancelJob;
  static readonly GetEnv: DekartGetEnv;
  static readonly GetReportStream: DekartGetReportStream;
  static readonly GetReportListStream: DekartGetReportListStream;
  static readonly GetUserStream: DekartGetUserStream;
  static readonly GetUsage: DekartGetUsage;
  static readonly CreateConnection: DekartCreateConnection;
  static readonly GetGcpProjectList: DekartGetGcpProjectList;
  static readonly UpdateConnection: DekartUpdateConnection;
  static readonly ArchiveConnection: DekartArchiveConnection;
  static readonly GetConnectionList: DekartGetConnectionList;
  static readonly TestConnection: DekartTestConnection;
  static readonly SetDefaultConnection: DekartSetDefaultConnection;
  static readonly RespondToInvite: DekartRespondToInvite;
  static readonly CreateSubscription: DekartCreateSubscription;
  static readonly GetStripePortalSession: DekartGetStripePortalSession;
  static readonly CreateWorkspace: DekartCreateWorkspace;
  static readonly UpdateWorkspace: DekartUpdateWorkspace;
  static readonly GetWorkspace: DekartGetWorkspace;
  static readonly UpdateWorkspaceUser: DekartUpdateWorkspaceUser;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class DekartClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createReport(
    requestMessage: proto_dekart_pb.CreateReportRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.CreateReportResponse|null) => void
  ): UnaryResponse;
  createReport(
    requestMessage: proto_dekart_pb.CreateReportRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.CreateReportResponse|null) => void
  ): UnaryResponse;
  forkReport(
    requestMessage: proto_dekart_pb.ForkReportRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.ForkReportResponse|null) => void
  ): UnaryResponse;
  forkReport(
    requestMessage: proto_dekart_pb.ForkReportRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.ForkReportResponse|null) => void
  ): UnaryResponse;
  updateReport(
    requestMessage: proto_dekart_pb.UpdateReportRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.UpdateReportResponse|null) => void
  ): UnaryResponse;
  updateReport(
    requestMessage: proto_dekart_pb.UpdateReportRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.UpdateReportResponse|null) => void
  ): UnaryResponse;
  archiveReport(
    requestMessage: proto_dekart_pb.ArchiveReportRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.ArchiveReportResponse|null) => void
  ): UnaryResponse;
  archiveReport(
    requestMessage: proto_dekart_pb.ArchiveReportRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.ArchiveReportResponse|null) => void
  ): UnaryResponse;
  setDiscoverable(
    requestMessage: proto_dekart_pb.SetDiscoverableRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.SetDiscoverableResponse|null) => void
  ): UnaryResponse;
  setDiscoverable(
    requestMessage: proto_dekart_pb.SetDiscoverableRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.SetDiscoverableResponse|null) => void
  ): UnaryResponse;
  publishReport(
    requestMessage: proto_dekart_pb.PublishReportRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.PublishReportResponse|null) => void
  ): UnaryResponse;
  publishReport(
    requestMessage: proto_dekart_pb.PublishReportRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.PublishReportResponse|null) => void
  ): UnaryResponse;
  allowExportDatasets(
    requestMessage: proto_dekart_pb.AllowExportDatasetsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.AllowExportDatasetsResponse|null) => void
  ): UnaryResponse;
  allowExportDatasets(
    requestMessage: proto_dekart_pb.AllowExportDatasetsRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.AllowExportDatasetsResponse|null) => void
  ): UnaryResponse;
  addReadme(
    requestMessage: proto_dekart_pb.AddReadmeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.AddReadmeResponse|null) => void
  ): UnaryResponse;
  addReadme(
    requestMessage: proto_dekart_pb.AddReadmeRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.AddReadmeResponse|null) => void
  ): UnaryResponse;
  removeReadme(
    requestMessage: proto_dekart_pb.RemoveReadmeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.RemoveReadmeResponse|null) => void
  ): UnaryResponse;
  removeReadme(
    requestMessage: proto_dekart_pb.RemoveReadmeRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.RemoveReadmeResponse|null) => void
  ): UnaryResponse;
  createDataset(
    requestMessage: proto_dekart_pb.CreateDatasetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.CreateDatasetResponse|null) => void
  ): UnaryResponse;
  createDataset(
    requestMessage: proto_dekart_pb.CreateDatasetRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.CreateDatasetResponse|null) => void
  ): UnaryResponse;
  removeDataset(
    requestMessage: proto_dekart_pb.RemoveDatasetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.RemoveDatasetResponse|null) => void
  ): UnaryResponse;
  removeDataset(
    requestMessage: proto_dekart_pb.RemoveDatasetRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.RemoveDatasetResponse|null) => void
  ): UnaryResponse;
  updateDatasetName(
    requestMessage: proto_dekart_pb.UpdateDatasetNameRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.UpdateDatasetNameResponse|null) => void
  ): UnaryResponse;
  updateDatasetName(
    requestMessage: proto_dekart_pb.UpdateDatasetNameRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.UpdateDatasetNameResponse|null) => void
  ): UnaryResponse;
  updateDatasetConnection(
    requestMessage: proto_dekart_pb.UpdateDatasetConnectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.UpdateDatasetConnectionResponse|null) => void
  ): UnaryResponse;
  updateDatasetConnection(
    requestMessage: proto_dekart_pb.UpdateDatasetConnectionRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.UpdateDatasetConnectionResponse|null) => void
  ): UnaryResponse;
  createFile(
    requestMessage: proto_dekart_pb.CreateFileRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.CreateFileResponse|null) => void
  ): UnaryResponse;
  createFile(
    requestMessage: proto_dekart_pb.CreateFileRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.CreateFileResponse|null) => void
  ): UnaryResponse;
  createQuery(
    requestMessage: proto_dekart_pb.CreateQueryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.CreateQueryResponse|null) => void
  ): UnaryResponse;
  createQuery(
    requestMessage: proto_dekart_pb.CreateQueryRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.CreateQueryResponse|null) => void
  ): UnaryResponse;
  runQuery(
    requestMessage: proto_dekart_pb.RunQueryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.RunQueryResponse|null) => void
  ): UnaryResponse;
  runQuery(
    requestMessage: proto_dekart_pb.RunQueryRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.RunQueryResponse|null) => void
  ): UnaryResponse;
  runAllQueries(
    requestMessage: proto_dekart_pb.RunAllQueriesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.RunAllQueriesResponse|null) => void
  ): UnaryResponse;
  runAllQueries(
    requestMessage: proto_dekart_pb.RunAllQueriesRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.RunAllQueriesResponse|null) => void
  ): UnaryResponse;
  cancelJob(
    requestMessage: proto_dekart_pb.CancelJobRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.CancelJobResponse|null) => void
  ): UnaryResponse;
  cancelJob(
    requestMessage: proto_dekart_pb.CancelJobRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.CancelJobResponse|null) => void
  ): UnaryResponse;
  getEnv(
    requestMessage: proto_dekart_pb.GetEnvRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.GetEnvResponse|null) => void
  ): UnaryResponse;
  getEnv(
    requestMessage: proto_dekart_pb.GetEnvRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.GetEnvResponse|null) => void
  ): UnaryResponse;
  getReportStream(requestMessage: proto_dekart_pb.ReportStreamRequest, metadata?: grpc.Metadata): ResponseStream<proto_dekart_pb.ReportStreamResponse>;
  getReportListStream(requestMessage: proto_dekart_pb.ReportListRequest, metadata?: grpc.Metadata): ResponseStream<proto_dekart_pb.ReportListResponse>;
  getUserStream(requestMessage: proto_dekart_pb.GetUserStreamRequest, metadata?: grpc.Metadata): ResponseStream<proto_dekart_pb.GetUserStreamResponse>;
  getUsage(
    requestMessage: proto_dekart_pb.GetUsageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.GetUsageResponse|null) => void
  ): UnaryResponse;
  getUsage(
    requestMessage: proto_dekart_pb.GetUsageRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.GetUsageResponse|null) => void
  ): UnaryResponse;
  createConnection(
    requestMessage: proto_dekart_pb.CreateConnectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.CreateConnectionResponse|null) => void
  ): UnaryResponse;
  createConnection(
    requestMessage: proto_dekart_pb.CreateConnectionRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.CreateConnectionResponse|null) => void
  ): UnaryResponse;
  getGcpProjectList(
    requestMessage: proto_dekart_pb.GetGcpProjectListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.GetGcpProjectListResponse|null) => void
  ): UnaryResponse;
  getGcpProjectList(
    requestMessage: proto_dekart_pb.GetGcpProjectListRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.GetGcpProjectListResponse|null) => void
  ): UnaryResponse;
  updateConnection(
    requestMessage: proto_dekart_pb.UpdateConnectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.UpdateConnectionResponse|null) => void
  ): UnaryResponse;
  updateConnection(
    requestMessage: proto_dekart_pb.UpdateConnectionRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.UpdateConnectionResponse|null) => void
  ): UnaryResponse;
  archiveConnection(
    requestMessage: proto_dekart_pb.ArchiveConnectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.ArchiveConnectionResponse|null) => void
  ): UnaryResponse;
  archiveConnection(
    requestMessage: proto_dekart_pb.ArchiveConnectionRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.ArchiveConnectionResponse|null) => void
  ): UnaryResponse;
  getConnectionList(
    requestMessage: proto_dekart_pb.GetConnectionListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.GetConnectionListResponse|null) => void
  ): UnaryResponse;
  getConnectionList(
    requestMessage: proto_dekart_pb.GetConnectionListRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.GetConnectionListResponse|null) => void
  ): UnaryResponse;
  testConnection(
    requestMessage: proto_dekart_pb.TestConnectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.TestConnectionResponse|null) => void
  ): UnaryResponse;
  testConnection(
    requestMessage: proto_dekart_pb.TestConnectionRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.TestConnectionResponse|null) => void
  ): UnaryResponse;
  setDefaultConnection(
    requestMessage: proto_dekart_pb.SetDefaultConnectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.SetDefaultConnectionResponse|null) => void
  ): UnaryResponse;
  setDefaultConnection(
    requestMessage: proto_dekart_pb.SetDefaultConnectionRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.SetDefaultConnectionResponse|null) => void
  ): UnaryResponse;
  respondToInvite(
    requestMessage: proto_dekart_pb.RespondToInviteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.RespondToInviteResponse|null) => void
  ): UnaryResponse;
  respondToInvite(
    requestMessage: proto_dekart_pb.RespondToInviteRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.RespondToInviteResponse|null) => void
  ): UnaryResponse;
  createSubscription(
    requestMessage: proto_dekart_pb.CreateSubscriptionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.CreateSubscriptionResponse|null) => void
  ): UnaryResponse;
  createSubscription(
    requestMessage: proto_dekart_pb.CreateSubscriptionRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.CreateSubscriptionResponse|null) => void
  ): UnaryResponse;
  getStripePortalSession(
    requestMessage: proto_dekart_pb.GetStripePortalSessionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.GetStripePortalSessionResponse|null) => void
  ): UnaryResponse;
  getStripePortalSession(
    requestMessage: proto_dekart_pb.GetStripePortalSessionRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.GetStripePortalSessionResponse|null) => void
  ): UnaryResponse;
  createWorkspace(
    requestMessage: proto_dekart_pb.CreateWorkspaceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.CreateWorkspaceResponse|null) => void
  ): UnaryResponse;
  createWorkspace(
    requestMessage: proto_dekart_pb.CreateWorkspaceRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.CreateWorkspaceResponse|null) => void
  ): UnaryResponse;
  updateWorkspace(
    requestMessage: proto_dekart_pb.UpdateWorkspaceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.UpdateWorkspaceResponse|null) => void
  ): UnaryResponse;
  updateWorkspace(
    requestMessage: proto_dekart_pb.UpdateWorkspaceRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.UpdateWorkspaceResponse|null) => void
  ): UnaryResponse;
  getWorkspace(
    requestMessage: proto_dekart_pb.GetWorkspaceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.GetWorkspaceResponse|null) => void
  ): UnaryResponse;
  getWorkspace(
    requestMessage: proto_dekart_pb.GetWorkspaceRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.GetWorkspaceResponse|null) => void
  ): UnaryResponse;
  updateWorkspaceUser(
    requestMessage: proto_dekart_pb.UpdateWorkspaceUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.UpdateWorkspaceUserResponse|null) => void
  ): UnaryResponse;
  updateWorkspaceUser(
    requestMessage: proto_dekart_pb.UpdateWorkspaceUserRequest,
    callback: (error: ServiceError|null, responseMessage: proto_dekart_pb.UpdateWorkspaceUserResponse|null) => void
  ): UnaryResponse;
}

