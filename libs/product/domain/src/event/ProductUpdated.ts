import { Event } from '@tshio/event-dispatcher';
import { ProductPrimitives } from '..';

export class ProductUpdated implements Event {
  readonly name = ProductUpdated.name;

  constructor(readonly payload: ProductPrimitives) {}
}