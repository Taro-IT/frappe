//FRAPPE-81
import { Event } from '@tshio/event-dispatcher';

export type StripeProductCreatedPayload = {
  readonly id: string;
  readonly price: number;
}

export class StripeProductCreated implements Event {
  readonly name = StripeProductCreated.name;

  constructor(readonly payload: StripeProductCreatedPayload) {}

}