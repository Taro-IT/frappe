import cors from "cors";
import express from "express"
import helmet from "helmet";

export const configureApp = (): express.Express => {
  const app = express();

  app.use(cors());
  app.use(helmet());
  app.use(express.json());

  // TODO Register Routes
  app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to api-gateway!' });
  });

  return app;
}
