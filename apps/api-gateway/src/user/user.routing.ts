import { QueryBus } from '@tshio/query-bus';
import express from 'express';
import * as handlers from './handlers';


interface UserRoutingDeps {
  readonly queryBus: QueryBus;
}

export const userRouting = ({ queryBus }: UserRoutingDeps) => {
  const router = express.Router();

  router.get('/', handlers.searchUsersHandler(queryBus));

  return router;
}
