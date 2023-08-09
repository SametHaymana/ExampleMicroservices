import dotenv from 'dotenv';

// Config Dot Env
dotenv.config();

export const PORT: string = process.env.PORT || '';
export const PGHOST: string = process.env.PGHOST || '';
export const PGUSER: string = process.env.PGUSER || '';
export const PGDATABASE: string = process.env.PGDATABASE || '';
export const PGPASSWORD: string = process.env.PGPASSWORD || '';
export const REDIS_HOST: string = process.env.REDIS_HOST || '';
export const REDIS_PORT: string = process.env.REDIS_PORT || '';
export const KAFKA_HOST: string = process.env.REDIS_PORT || '';
export const KAFKA_PORT: string = process.env.REDIS_PORT || '';
