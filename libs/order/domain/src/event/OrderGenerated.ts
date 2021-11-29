import { Event } from '@tshio/event-dispatcher';
import { OrderPrimitives } from '../utils';

export class OrderGenerated implements Event {
  readonly name = OrderGenerated.name;
  constructor(readonly payload: OrderPrimitives) {}
}
