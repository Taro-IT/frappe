import express from 'express';
import { CommandBus } from '@tshio/command-bus';
import { makeValidateBody } from 'express-class-validator';
import * as dtos from './dto';
import * as handlers from './handlers';
import { QueryBus } from '@tshio/query-bus';
import { authorizationMiddleware } from '../middlewares/authorizationMiddleware';
import { Role } from '@frappe/account/domain';
import { authenticationMiddleware } from '../middlewares';
import { TokenAuthentication } from '@frappe/account/application';

interface CollectionRoutingDeps {
  readonly commandBus: CommandBus;
  readonly queryBus: QueryBus;
  readonly tokenAuthentication: TokenAuthentication;
}

export const materialRouting = ({ commandBus, queryBus, tokenAuthentication }: CollectionRoutingDeps) => {
  const router = express.Router();
  
  // User Story: Frappe 71
  router.post(
    '/',
    authenticationMiddleware(tokenAuthentication),
    authorizationMiddleware([Role.ADMIN]),
    makeValidateBody(dtos.CreateMaterialDto),
    handlers.createMaterialHandler(commandBus)
  );
  // User Story: Frappe 67
  router.patch(
    '/:id',
    authenticationMiddleware(tokenAuthentication),
    authorizationMiddleware([Role.ADMIN]),
    makeValidateBody(dtos.UpdateMaterialDto),
    handlers.updateMaterialHandler(commandBus)
  );
  // User Story: Frappe 501
  router.get(
    '/',
    handlers.listMaterialHandler(queryBus)
  );
  // User Story: Frappe 68
  router.delete(
    '/:id',
    authenticationMiddleware(tokenAuthentication),
    authorizationMiddleware([Role.ADMIN]),
    handlers.deleteMaterialHandler(commandBus)
  );

  return router;
};
