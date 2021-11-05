import { OrderItemType, OrderStatuses } from '@frappe/order/domain';
//import { ShippingAddressPrimitives } from '@frappe/shipping/domain';
import { Command } from '@tshio/command-bus';

interface CreateOrderCommandPayload {
  readonly id: string;
  readonly items: OrderItemType[];
  readonly subtotal: number;
  readonly total: number;
  readonly status: OrderStatuses;
  readonly isDelayed: boolean;
/*   readonly address?: ShippingAddressPrimitives;
  readonly clientName?: string; */
}

export class CreateOrderCommand implements Command<CreateOrderCommandPayload> {
  readonly type = CreateOrderCommand.name;

  constructor(readonly payload: CreateOrderCommandPayload) {}
}
