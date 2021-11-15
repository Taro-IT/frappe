import { Event } from '@tshio/event-dispatcher';

interface PasswordResetCodeCreatedPayload {
  readonly email: string;
  readonly code: string;
}

export class PasswordResetCodeCreated implements Event {
  readonly name = PasswordResetCodeCreated.name;

  constructor(readonly payload: PasswordResetCodeCreatedPayload) { }
}
