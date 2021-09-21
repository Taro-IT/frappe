import cors from "cors";
import express from "express"
import helmet from "helmet";

interface AppProps {
  readonly router: express.Router;
}

export const configureApp = ({ router }: AppProps): express.Express => {
  const app = express();

  app.use(cors());
  app.use(helmet());
  app.use(express.json());

  app.use('/api', router);

  return app;
}
