import { Request, Response } from 'express';
import { ResponseOk } from '../types/Responses/responses.types';
import { userService } from '../services/Users/user.services';
import { USER_SERVICE_ADDRESS, USER_SERVICE_PORT } from '../utils/config.utils';

export class UsersController {
  async getAll(req: Request, res: Response) {
    console.log('Serviceeee', userService);
    const page = parseInt(req.query.page as string);
    const pageSize = parseInt(req.query.pageSize as string);

    const users = await userService.listUsers({ page, pageSize });
    return res.json(new ResponseOk(undefined, users));
  }

  getById(req: Request, res: Response) {}
}
