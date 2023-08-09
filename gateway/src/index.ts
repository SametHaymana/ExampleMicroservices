import { app } from './app';
import { PORT } from './utils/config.utils';

const start = (port: number) => {
  try {
    app.listen(port, () => {
      console.info('Server listening on port: ' + port);
    });
  } catch (err) {
    console.error(err);
    process.exit();
  }
};

start(parseInt(PORT));
