import { Router } from 'express';
import { UsersController } from '../controllers/user.controller';

export const router = Router();
const usersController = new UsersController();

router.get('/', usersController.getAll);
