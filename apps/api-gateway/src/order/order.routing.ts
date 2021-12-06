import express from 'express';
import { CommandBus } from '@tshio/command-bus';
import { makeValidateBody } from 'express-class-validator';

import { QueryBus } from '@tshio/query-bus';
import * as handlers from './handlers';
import * as dto from './dto';
import { authenticationMiddleware } from '../middlewares';
import { TokenAuthentication } from '@frappe/account/application';
import { authorizationMiddleware } from '../middlewares/authorizationMiddleware';
import { Role } from '@frappe/account/domain';

interface OrderRoutingDeps {
  readonly commandBus: CommandBus;
  readonly queryBus: QueryBus;
  readonly tokenAuthentication: TokenAuthentication;
}

export const orderRouting = ({ commandBus, queryBus, tokenAuthentication }: OrderRoutingDeps) => {
  const router = express.Router();

  //User Story: frappe-91
  router.get(
    '/',
    authenticationMiddleware(tokenAuthentication),
    authorizationMiddleware([Role.ADMIN, Role.WARESTORE]),
    handlers.listOrderHandler(queryBus)
  );
  router.post(
    '/',
    makeValidateBody(dto.CreateOrderDto),
    handlers.createOrderHandler(commandBus)
  );
  //User Story: frappe-507
  router.patch(
    '/:id',
    authenticationMiddleware(tokenAuthentication),
    authorizationMiddleware([Role.ADMIN]),
    makeValidateBody(dto.UpdateOrderDto),
    handlers.updateOrderHandler(commandBus)
    );
  router.get(
    '/pdf/:id',
    authenticationMiddleware(tokenAuthentication),
    authorizationMiddleware([Role.ADMIN, Role.WARESTORE]),
    handlers.generatePdfHandler(commandBus)
  );

  return router;
};
