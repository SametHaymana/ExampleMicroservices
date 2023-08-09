import { Server } from '@grpc/grpc-js';
import {
  UserService,
  UserServiceService,
} from './controllers/users.controller';
import { HealthService } from './repositories/proto/health';
import { HealthCheck } from './controllers/health.controller';

export const server = new Server();

server.addService(UserServiceService, new UserService());
server.addService(HealthService, new HealthCheck());
