import { server } from './app';
import { seq, testConnection } from './services/db.services';
import { PORT } from './utlis/config.utils';
import { ServerCredentials } from '@grpc/grpc-js';

async function main() {
  const testDb = await testConnection();
  if (testDb) console.log('DB Connected');

  // Check tables
  await seq.sync({ force: true, alter: true });

  server.bindAsync(
    `0.0.0.0:${PORT}`,
    ServerCredentials.createInsecure(),
    () => {
      server.start();
      console.log(`server is running on port:${PORT}`);
    }
  );
}

main();
