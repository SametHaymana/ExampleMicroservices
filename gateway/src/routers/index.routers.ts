import { Router } from 'express';
import * as userRouter from './user.routers';

export const router = Router();

router.use('/users', userRouter.router);
