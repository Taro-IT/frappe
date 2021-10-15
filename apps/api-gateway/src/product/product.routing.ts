import {QueryBus} from "@tshio/query-bus";
import express from "express";
import * as handlers from './handler';

interface ProductRoutingDeps {
  readonly queryBus: QueryBus;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const productRouting = ({ queryBus }: ProductRoutingDeps) => {
  const router = express.Router();

  router.get('/', handlers.searchProductsHandler(queryBus));

  return router;
}
