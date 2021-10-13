import express from "express";
import {CommandBus} from "@tshio/command-bus";
import {makeValidateBody} from "express-class-validator";
import * as dtos from './dto';
import * as handlers from './handlers';
import { QueryBus } from "@tshio/query-bus";

interface CollectionRoutingDeps {
  readonly commandBus: CommandBus
  readonly queryBus: QueryBus
}

export const categoryRouting = ({ commandBus, queryBus }: CollectionRoutingDeps) => {
  const router = express.Router();
  
  router.post('/', makeValidateBody(dtos.CreateCategoryDto), handlers.createCategoryHandler(commandBus));
  router.patch('/:id', makeValidateBody(dtos.UpdateCategoryDto), handlers.updateCategoryHandler(commandBus));
  router.get('/', handlers.listCategoryHandler(queryBus));
  router.delete('/:id', handlers.deleteCategoryHandler(commandBus));

  return router;
}
