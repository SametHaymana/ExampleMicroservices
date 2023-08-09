import { credentials, Metadata, ServiceError } from '@grpc/grpc-js';
import {
  getAllIput,
  getAllOutput,
  getByIdInput,
  getByIdOutput,
  UserServiceClient,
} from './proto/users';
import { promisify } from 'util';
import {
  USER_SERVICE_ADDRESS,
  USER_SERVICE_PORT,
} from '../../utils/config.utils';

class UserService {
  private readonly client: UserServiceClient;

  constructor(private host: string, private port: number | string) {
    this.client = new UserServiceClient(
      `${host}:${port}`,
      credentials.createInsecure(),
      {
        'grpc.keepalive_time_ms': 120000,
        'grpc.http2.min_time_between_pings_ms': 120000,
        'grpc.keepalive_timeout_ms': 20000,
        'grpc.http2.max_pings_without_data': 0,
        'grpc.keepalive_permit_without_calls': 1,
      }
    );
  }

  public async listUsers(
    param: getAllIput,
    metadata = new Metadata()
  ): Promise<getAllOutput> {
    return promisify<getAllIput, Metadata, getAllOutput>(
      this.client.getAll.bind(this.client)
    )(param, metadata);
  }

  public async getUserById(
    param: getByIdInput,
    metadata = new Metadata()
  ): Promise<getByIdOutput> {
    return promisify<getByIdInput, Metadata, getByIdOutput>(
      this.client.getById.bind(this.client)
    )(param, metadata);
  }
}

export const userService = new UserService(
  USER_SERVICE_ADDRESS,
  USER_SERVICE_PORT
);
