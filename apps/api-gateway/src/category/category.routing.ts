import express from 'express';
import { CommandBus } from '@tshio/command-bus';
import { makeValidateBody } from 'express-class-validator';
import * as dtos from './dto';
import * as handlers from './handlers';
import { QueryBus } from '@tshio/query-bus';
import { authenticationMiddleware } from '../middlewares';
import { TokenAuthentication } from '@frappe/account/application';
import { authorizationMiddleware } from '../middlewares/authorizationMiddleware';
import { Role } from '@frappe/account/domain';

interface CollectionRoutingDeps {
  readonly commandBus: CommandBus;
  readonly queryBus: QueryBus;
  readonly tokenAuthentication: TokenAuthentication;
}

export const categoryRouting = ({ commandBus, queryBus, tokenAuthentication }: CollectionRoutingDeps) => {
  const router = express.Router();

  router.post(
    '/',
    authenticationMiddleware(tokenAuthentication),
    authorizationMiddleware([Role.ADMIN]),
    makeValidateBody(dtos.CreateCategoryDto),
    handlers.createCategoryHandler(commandBus)
  );
  router.patch('/:id',
    authenticationMiddleware(tokenAuthentication),
    authorizationMiddleware([Role.ADMIN]),
    makeValidateBody(dtos.UpdateCategoryDto),
    handlers.updateCategoryHandler(commandBus)
  );
  router.get(
    '/',
    handlers.listCategoryHandler(queryBus)
  );
  router.delete(
    '/:id',
    authenticationMiddleware(tokenAuthentication),
    authorizationMiddleware([Role.ADMIN]),
    handlers.deleteCategoryHandler(commandBus)
  );

  return router;
};
