import { Event } from '@tshio/event-dispatcher';

export class CommentSent implements Event {
  readonly name = CommentSent.name;
  constructor(readonly payload: {name : string,  email : string,  subject : string, message : string, lastName? : string, phone? : string}) {}
}
