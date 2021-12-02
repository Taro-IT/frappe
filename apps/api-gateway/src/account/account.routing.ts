import { TokenAuthentication } from '@frappe/account/application';
import { Role } from '@frappe/account/domain';
import { CommandBus } from '@tshio/command-bus';
import express from 'express';
import { makeValidateBody } from 'express-class-validator';
import { authenticationMiddleware } from '../middlewares';
import { authorizationMiddleware } from '../middlewares/authorizationMiddleware';
import * as dtos from './dto';
import * as handlers from './handlers';

interface AccountRoutingDeps {
  readonly commandBus: CommandBus;
  readonly tokenAuthentication: TokenAuthentication;
}

export const accountRouting = ({ commandBus, tokenAuthentication }: AccountRoutingDeps) => {
  const router = express.Router();

  router.post(
    '/signup',
    authenticationMiddleware(tokenAuthentication),
    authorizationMiddleware([Role.ADMIN]),
    makeValidateBody(dtos.AccountSignUpDto),
    handlers.signUpHandler(commandBus)
  );
  router.post(
    '/reset-password',
    makeValidateBody(dtos.UpdatePasswordDto),
    handlers.updateUserPasswordHandler(commandBus)
  );

  return router;
};
