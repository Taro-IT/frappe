import { InvalidOrderStatus } from '../error';
import { OrderStatuses } from '../utils';

export class OrderStatus {
  readonly value: OrderStatuses;

  constructor(value: OrderStatuses) {
    this.value = value;
  }

  protected throwErrorForInvalidValue(value: string): void {
    throw new InvalidOrderStatus(value);
  }
}
