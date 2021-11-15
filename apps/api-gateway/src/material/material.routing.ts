import express from 'express';
import { CommandBus } from '@tshio/command-bus';
import { makeValidateBody } from 'express-class-validator';
import * as dtos from './dto';
import * as handlers from './handlers';
import { QueryBus } from '@tshio/query-bus';

interface CollectionRoutingDeps {
  readonly commandBus: CommandBus;
  readonly queryBus: QueryBus;
}

export const materialRouting = ({ commandBus, queryBus }: CollectionRoutingDeps) => {
  const router = express.Router();
  
  // User Story: Frappe 71
  router.post('/', makeValidateBody(dtos.CreateMaterialDto), handlers.createMaterialHandler(commandBus));
  // User Story: Frappe 67
  router.patch('/:id', makeValidateBody(dtos.UpdateMaterialDto), handlers.updateMaterialHandler(commandBus));
  // User Story: Frappe 501
  router.get('/', handlers.listMaterialHandler(queryBus));
  // User Story: Frappe 68
  router.delete('/:id', handlers.deleteMaterialHandler(commandBus));

  return router;
};
