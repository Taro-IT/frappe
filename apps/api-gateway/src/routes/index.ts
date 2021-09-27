import express from "express";

interface RoutesDeps {
  readonly categoryRouting: express.Router;
}

export const configureRouter = (routes: RoutesDeps): express.Router => {
  const router = express.Router();

  router.use('/categories', routes.categoryRouting);

  return router;
}
