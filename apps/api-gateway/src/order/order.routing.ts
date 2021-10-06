import express from "express";
import {CommandBus} from "@tshio/command-bus";
import {makeValidateBody} from "express-class-validator";

import { QueryBus } from "@tshio/query-bus";

interface CollectionRoutingDeps {
  readonly commandBus: CommandBus
  readonly queryBus: QueryBus
}

export const categoryRouting = ({ commandBus, queryBus }: CollectionRoutingDeps) => {
  /* const router = express.Router();
  
  router.get('/', handlers.listOrderHandler(queryBus));

  return router; */
}
