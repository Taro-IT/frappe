import { Event } from '@tshio/event-dispatcher';
import { OrderPrimitives } from '../utils';

export class OrderUpdateStatus implements Event {
  readonly name = OrderUpdateStatus.name;
  
  constructor(readonly payload: OrderPrimitives) {}
}
