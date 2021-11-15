//User story: frappe-507
import { OrderStatuses } from '@frappe/order/domain';
import { Command } from '@tshio/command-bus';

interface UpdateOrderCommandPayload {
  readonly id: string;
  readonly status: OrderStatuses;
}

export class UpdateOrderCommand implements Command<UpdateOrderCommandPayload> {
  readonly type = UpdateOrderCommand.name;

  constructor(readonly payload: UpdateOrderCommandPayload) {}
}