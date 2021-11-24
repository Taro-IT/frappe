import express from 'express';
import { CommandBus } from '@tshio/command-bus';
import { QueryBus } from '@tshio/query-bus';
import * as handlers from './handlers'
import * as dto from "./dto"
import { makeValidateBody } from 'express-class-validator';

interface PaymentRoutingDeps {
  readonly commandBus: CommandBus;
  readonly queryBus: QueryBus;
}

export const paymentRouting = ({ commandBus }: PaymentRoutingDeps) => {
  const router = express.Router();

  //User story: frappe-89
  router.post('/', makeValidateBody(dto.CreatePaymentSessionDto), handlers.createPaymentSessionHandler(commandBus));

  return router;
};
