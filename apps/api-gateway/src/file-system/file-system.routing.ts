import express from "express";
import {CommandBus} from "@tshio/command-bus";
import * as handlers from './handlers';
import {fileIntersectorMiddleware} from '../middlewares';

interface FileSystemRoutingDeps {
  readonly commandBus: CommandBus
}

export const fileSystemRouting = ({ commandBus }: FileSystemRoutingDeps) => {
  const router = express.Router();
  
  router.post('/', fileIntersectorMiddleware("file") , handlers.uploadFileCommandHandler(commandBus));
  
  return router;
}
