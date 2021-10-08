import express from "express";
import {CommandBus} from "@tshio/command-bus";
import {makeValidateBody} from "express-class-validator";

import { QueryBus } from "@tshio/query-bus";
import * as handlers from "./handlers";
import * as dto from "./dto"

interface CollectionRoutingDeps {
  readonly commandBus: CommandBus
  readonly queryBus: QueryBus
}

export const categoryRouting = ({ commandBus, queryBus }: CollectionRoutingDeps) => {
  const router = express.Router();
  
  router.get('/', handlers.listOrderHandler(queryBus));
  router.post('/', makeValidateBody(dto.CreateOrderDto), handlers.createOrderHandler(commandBus));

  return router;
}
