import { Sequelize } from 'sequelize';
import { PGHOST, PGUSER, PGDATABASE, PGPASSWORD } from '../utlis/config.utils';

export const seq: Sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHOST,
  dialect: 'postgres',
});

export async function testConnection(): Promise<boolean> {
  try {
    await seq.authenticate();
    return true;
  } catch (error) {
    return false;
  }
}
