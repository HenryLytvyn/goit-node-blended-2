import express from 'express';
import { APP_PORT } from './constants/constants-env.js';
import { pinoHttp } from 'pino-http';
import cors from 'cors';

export default function setupServer() {
  const app = express();

  app.use(
    pinoHttp({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(cors());

  app.listen(APP_PORT, () => {
    console.log(`Server is running on port: ${APP_PORT}`);
  });
}
