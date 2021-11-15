import express from 'express';

interface RoutesDeps {
  readonly categoryRouting: express.Router;
  readonly accountRouting: express.Router;
  readonly fileSystemRouting: express.Router;
  readonly orderRouting: express.Router;
  readonly productRouting: express.Router;
  readonly userRouting: express.Router
}

export const configureRouter = (routes: RoutesDeps): express.Router => {
  const router = express.Router();

  router.use('/categories', routes.categoryRouting);
  router.use('/accounts', routes.accountRouting);
  router.use('/file-system', routes.fileSystemRouting);
  router.use('/orders', routes.orderRouting);
  router.use('/products', routes.productRouting);
  router.use('/users', routes.userRouting);

  return router;
};
