import { OrderItemType, OrderStatuses } from '@frappe/order/domain';
import { Command } from '@tshio/command-bus';

interface CreateOrderCommandPayload {
  readonly id: string;
  readonly items: OrderItemType[];
  readonly subtotal: number;
  readonly total: number;
  readonly dateCreated: Date;
  readonly status: OrderStatuses;
  readonly isDelayed: boolean;
}

export class CreateOrderCommand implements Command<CreateOrderCommandPayload> {
  readonly type = CreateOrderCommand.name;

  constructor(readonly payload: CreateOrderCommandPayload) {}
}
