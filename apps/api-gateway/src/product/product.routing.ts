import express from 'express';
import { CommandBus } from '@tshio/command-bus';
import { makeValidateBody } from 'express-class-validator';
import * as dtos from './dto';
import * as handlers from './handlers';
import { QueryBus } from '@tshio/query-bus';
import { Role } from '@frappe/account/domain';
import { authorizationMiddleware } from '../middlewares/authorizationMiddleware';
import { authenticationMiddleware } from '../middlewares';
import { TokenAuthentication } from '@frappe/account/application';

interface ProductRoutingDeps {
  readonly commandBus: CommandBus;
  readonly queryBus: QueryBus;
  readonly tokenAuthentication: TokenAuthentication;
}

export const productRouting = ({ commandBus, queryBus, tokenAuthentication }: ProductRoutingDeps) => {
  const router = express.Router();

  //User story: frappe-64
  router.post(
    '/',
    authenticationMiddleware(tokenAuthentication),
    authorizationMiddleware([Role.ADMIN]),
    makeValidateBody(dtos.CreateProductDto),
    handlers.createProductHandler(commandBus)
  );
  router.get('/', handlers.searchProductsHandler(queryBus));

  // User Story: frappe-58
  router.delete('/:id', handlers.deleteProductHandler(commandBus));

    //User story: frappe-64
  router.get('/:id', handlers.findByIdProductHandler(queryBus));

  // User story: frappe-59
  router.patch('/:id', makeValidateBody(dtos.UpdateProductDto), handlers.updateProductHandler(commandBus));
  return router;
};
