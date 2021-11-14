import express from 'express';
import { CommandBus } from '@tshio/command-bus';
import { makeValidateBody } from 'express-class-validator';
import * as dtos from './dto';
import * as handlers from './handlers';

interface CollectionRoutingDeps {
  readonly commandBus: CommandBus;
}

export const materialRouting = ({ commandBus }: CollectionRoutingDeps) => {
  const router = express.Router();
  
  // User Story: Frappe 508
  router.post('/', makeValidateBody(dtos.CreateMaterialDto), handlers.createMaterialHandler(commandBus));
  // User Story: Frappe 509
  router.patch('/:id', makeValidateBody(dtos.UpdateMaterialDto), handlers.updateMaterialHandler(commandBus));

  return router;
};
