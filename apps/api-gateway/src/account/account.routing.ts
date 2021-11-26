import { CommandBus } from '@tshio/command-bus';
import express from 'express';
import { makeValidateBody } from 'express-class-validator';
import * as dtos from './dto';
import * as handlers from './handlers';

interface AccountRoutingDeps {
  readonly commandBus: CommandBus;
}

export const accountRouting = ({ commandBus }: AccountRoutingDeps) => {
  const router = express.Router();

  router.post('/signup', makeValidateBody(dtos.AccountSignUpDto), handlers.signUpHandler(commandBus));
  router.post('/reset-password', makeValidateBody(dtos.UpdatePasswordDto), handlers.updateUserPasswordHandler(commandBus));

  return router;
};
