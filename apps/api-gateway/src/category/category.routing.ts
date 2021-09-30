import express from "express";
import {CommandBus} from "@tshio/command-bus";
import {makeValidateBody} from "express-class-validator";
import * as dtos from './dto';
import * as handlers from './handlers';

interface CollectionRoutingDeps {
  readonly commandBus: CommandBus
}

export const categoryRouting = ({ commandBus }: CollectionRoutingDeps) => {
  const router = express.Router();

  router.post('/', makeValidateBody(dtos.CreateCategoryDto), handlers.createCategoryHandler(commandBus));
  router.patch('/:id', makeValidateBody(dtos.UpdateCategoryDto), handlers.updateCategoryHandler(commandBus));
  return router;
}
