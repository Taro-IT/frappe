import { NextFunction, RequestHandler } from 'express';
import { Uuid } from '@frappe/common/value-object';
import { CommentSent } from '@frappe/email/domain';
import { EventDispatcher } from '@tshio/event-dispatcher';

export const commentCreatedHandler =
  (eventBus: EventDispatcher): RequestHandler =>
  async (req, res, next: NextFunction) => {
    const id = Uuid.create().value;
    try {
      eventBus.dispatch(new CommentSent( {name : req.body.name ,  email : req.body.email,  subject : req.body.subject, message : req.body.message, lastName : req.body.lastName, phone : req.body.phone}));
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  };
