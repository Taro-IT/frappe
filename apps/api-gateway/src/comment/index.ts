import { AwilixContainer, asClass, asFunction } from 'awilix';
import { commentRouting } from './comment.routing';
import {
    SendEmailOnCommentSent,
} from '@frappe/email/application';

export const commentModule = (container: AwilixContainer) => {
  container.register({
    commentSender: asClass(SendEmailOnCommentSent).singleton(),
    commentRouting: asFunction(commentRouting).singleton(),
  });
};
