import { OrderItemType, OrderStatuses } from '@frappe/order/domain';
import { IsEnum, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  readonly items: OrderItemType[];

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly subtotal: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly total: number;

  @IsEnum(OrderStatuses)
  readonly status: OrderStatuses;

  @IsNotEmpty()
  readonly isDelayed: boolean;
}
