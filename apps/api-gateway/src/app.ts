import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { errorHandler } from './middlewares';


interface AppProps {
  readonly router: express.Router;
}

export const configureApp = ({ router }: AppProps): express.Express => {
  const app = express();

  app.use(cors({origin: true})); // CORS
  app.use(helmet()); // Security Headers
  app.use(express.json()); // Response JSON

  app.use('/api', router);
  app.use(errorHandler);

  return app;
};
