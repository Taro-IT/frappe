import express from 'express';
import { CommandBus } from '@tshio/command-bus';
import { makeValidateBody } from 'express-class-validator';

import { QueryBus } from '@tshio/query-bus';
import * as handlers from './handlers';
import * as dto from './dto';

interface OrderRoutingDeps {
  readonly commandBus: CommandBus;
  readonly queryBus: QueryBus;
}

export const orderRouting = ({ commandBus, queryBus }: OrderRoutingDeps) => {
  const router = express.Router();

  //User Story: frappe-91
  router.get('/', handlers.listOrderHandler(queryBus));
  router.post('/', makeValidateBody(dto.CreateOrderDto), handlers.createOrderHandler(commandBus));
  router.get('/pdf/:id', handlers.generatePdfHandler(commandBus));

  return router;
};
