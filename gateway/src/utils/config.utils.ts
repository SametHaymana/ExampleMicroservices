import dotenv from 'dotenv';
import path from 'path';

// Config Dot Env
dotenv.config({ path: path.resolve('.env') });

export const PORT: string = process.env.PORT || '';
export const USER_SERVICE_ADDRESS: string =
  process.env.USER_SERVICE_ADDRESS || '';
export const USER_SERVICE_PORT: string = process.env.USER_SERVICE_PORT || '';
