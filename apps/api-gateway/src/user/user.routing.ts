import { QueryBus } from '@tshio/query-bus';
import express from 'express';
import * as handlers from './handlers';
import * as dtos from './dto';
import { makeValidateBody } from 'express-class-validator';
import { CommandBus } from '@tshio/command-bus';
import { authenticationMiddleware } from '../middlewares';
import { TokenAuthentication } from '@frappe/account/application';
import { authorizationMiddleware } from '../middlewares/authorizationMiddleware';
import { Role } from '@frappe/account/domain';

interface UserRoutingDeps {
  readonly queryBus: QueryBus;
  readonly commandBus: CommandBus;
  readonly tokenAuthentication: TokenAuthentication;
}

export const userRouting = ({ commandBus, queryBus, tokenAuthentication }: UserRoutingDeps) => {
  const router = express.Router();

  router.get(
    '/',
    authenticationMiddleware(tokenAuthentication),
    authorizationMiddleware([Role.ADMIN]),
    handlers.searchUsersHandler(queryBus)
  );
  router.put('/:id', makeValidateBody(dtos.UpdateUserDto), handlers.updateUserHandler(commandBus))
  router.post('/password-recovery', makeValidateBody(dtos.CreatePasswordResetCodeDto), handlers.createPasswordResetCodeHandler(commandBus));

  return router;
}
