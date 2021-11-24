import { Event } from '@tshio/event-dispatcher';
import { ProductPrimitives } from '..';

export class ProductCreated implements Event {
  readonly name = ProductCreated.name;

  constructor(readonly payload: ProductPrimitives) {}
}