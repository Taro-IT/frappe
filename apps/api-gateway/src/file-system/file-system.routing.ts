import express from "express";
import {CommandBus} from "@tshio/command-bus";
import * as handlers from './handlers';
import {fileIntersectorMiddleware} from '../middlewares';
import { authenticationMiddleware } from '../middlewares';
import { TokenAuthentication } from '@frappe/account/application';

interface FileSystemRoutingDeps {
  readonly commandBus: CommandBus
  readonly tokenAuthentication: TokenAuthentication;
}

export const fileSystemRouting = ({ commandBus, tokenAuthentication }: FileSystemRoutingDeps) => {
  const router = express.Router();

  router.use(authenticationMiddleware(tokenAuthentication))
  
  router.post('/', fileIntersectorMiddleware("file") , handlers.uploadFileCommandHandler(commandBus));
  
  return router;
}
