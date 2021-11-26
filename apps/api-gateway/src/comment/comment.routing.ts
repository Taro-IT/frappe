import express from 'express';
import * as handlers from './handlers'
import { EventDispatcher } from '@tshio/event-dispatcher';

interface CollectionRoutingDeps {
  readonly eventBus: EventDispatcher;
}

export const commentRouting = ({ eventBus}: CollectionRoutingDeps) => {
  const router = express.Router();

  router.post('/', handlers.commentCreatedHandler(eventBus));

  return router;
};
