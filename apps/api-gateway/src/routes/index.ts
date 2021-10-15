import express from 'express';

interface RoutesDeps {
  readonly categoryRouting: express.Router;
  readonly accountRouting: express.Router;
  readonly fileSystemRouting: express.Router;
  readonly orderRouting: express.Router;
}

export const configureRouter = (routes: RoutesDeps): express.Router => {
  const router = express.Router();

  router.use('/categories', routes.categoryRouting);
  router.use('/accounts', routes.accountRouting);
  router.use('/file-system', routes.fileSystemRouting);
  router.use('/orders', routes.orderRouting);

  return router;
};
