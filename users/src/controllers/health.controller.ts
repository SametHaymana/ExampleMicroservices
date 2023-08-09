import { ServerUnaryCall, handleUnaryCall, sendUnaryData } from '@grpc/grpc-js';
import {
  HealthCheckRequest,
  HealthCheckResponse,
  HealthServer,
  HealthCheckResponse_ServingStatus,
} from '../repositories/proto/health';

export class HealthCheck implements HealthServer {
  [name: string]: import('@grpc/grpc-js').UntypedHandleCall;

  check(
    call: ServerUnaryCall<HealthCheckRequest, HealthCheckResponse>,
    callback: sendUnaryData<HealthCheckResponse>
  ): void {
    const { service } = call.request;
    let status;
    if (service === 'PING') {
      status = HealthCheckResponse_ServingStatus.SERVING;
    } else {
      status = HealthCheckResponse_ServingStatus.UNRECOGNIZED;
    }

    return callback(null, HealthCheckResponse.fromJSON({ status }));
  }
}
