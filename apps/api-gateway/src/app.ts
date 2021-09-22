import cors from "cors";
import express from "express"
import helmet from "helmet";

interface AppProps {
  readonly router: express.Router;
}

export const configureApp = ({ router }: AppProps): express.Express => {
  const app = express();

  app.use(cors()); // CORS
  app.use(helmet()); // Security Headers
  app.use(express.json()); // Response JSON

  app.use('/api', router);

  return app;
}
