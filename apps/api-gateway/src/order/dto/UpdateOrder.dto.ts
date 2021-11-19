//User Story: frappe-507
import { OrderStatuses } from '@frappe/order/domain';
import { IsNotEmpty } from 'class-validator';

export class UpdateOrderDto {
  @IsNotEmpty()
  readonly status: OrderStatuses;
}
