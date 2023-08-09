import { server } from '../app';
import {
  ServerUnaryCall,
  sendUnaryData,
  Server,
  ServerCredentials,
  UntypedServiceImplementation,
  handleUnaryCall,
  UntypedHandleCall,
  status,
} from '@grpc/grpc-js';
import {
  UserServiceServer,
  getAllIput,
  getAllOutput,
  getByIdInput,
  getByIdOutput,
  UserServiceService,
} from '../repositories/proto/users';

import { UserRepository } from '../repositories/users.repository';
import { ServiceError } from '../types/Responses/responses.types';

const userRepository = new UserRepository();

class UserService implements UserServiceServer {
  [name: string]: UntypedHandleCall;

  public async getAll(
    call: ServerUnaryCall<getAllIput, getAllOutput>,
    callback: sendUnaryData<getAllOutput>
  ): Promise<void> {
    const res: Partial<getAllOutput> = {};
    const { page, pageSize } = call.request;
    const users = await userRepository.getAll(page, pageSize);
    res.users = users;
    callback(null, getAllOutput.fromJSON(res));
  }

  public async getById(
    call: ServerUnaryCall<getByIdInput, getByIdOutput>,
    callback: sendUnaryData<getByIdOutput>
  ): Promise<void> {
    const res: Partial<getByIdOutput> = {};
    const { id } = call.request;
    const user = await userRepository.getById(id);

    if (!user) {
      return callback(
        new ServiceError(status.NOT_FOUND, 'User Not Found!'),
        null
      );
    }

    res.user = user;
    return callback(null, getByIdOutput.fromJSON(res));
  }
}

export { UserService, UserServiceService };
