import express from 'express';
import { CommandBus } from '@tshio/command-bus';
import { makeValidateBody } from 'express-class-validator';
import * as dtos from './dto';
import * as handlers from './handlers';
import { QueryBus } from '@tshio/query-bus';

interface ProductRoutingDeps {
  readonly commandBus: CommandBus;
  readonly queryBus: QueryBus;
}

export const productRouting = ({ commandBus, queryBus }: ProductRoutingDeps) => {
  const router = express.Router();

  //User story: frappe-64
  router.post('/', makeValidateBody(dtos.CreateProductDto), handlers.createProductHandler(commandBus));
  router.get('/', handlers.searchProductsHandler(queryBus));

  // User Story: frappe-58
  router.delete('/:id', handlers.deleteProductHandler(commandBus));

  return router;
};
