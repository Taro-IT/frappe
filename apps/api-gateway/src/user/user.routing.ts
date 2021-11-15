import { QueryBus } from '@tshio/query-bus';
import express from 'express';
import * as handlers from './handlers';
import * as dtos from './dto';
import { makeValidateBody } from 'express-class-validator';
import { CommandBus } from '@tshio/command-bus';


interface UserRoutingDeps {
  readonly queryBus: QueryBus;
  readonly commandBus: CommandBus;
}

export const userRouting = ({ commandBus, queryBus }: UserRoutingDeps) => {
  const router = express.Router();

  router.get('/', handlers.searchUsersHandler(queryBus));
  router.post('/password-recovery', makeValidateBody(dtos.CreatePasswordResetCodeDto), handlers.createPasswordResetCodeHandler(commandBus));

  return router;
}
