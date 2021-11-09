import { OrderItemType, OrderStatuses } from '@frappe/order/domain';
import { ShippingAddressPrimitives } from '@frappe/shipping/domain';
import { IsEnum, IsNotEmpty, IsNotEmptyObject, IsNumber, IsPositive } from 'class-validator';

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

  @IsNotEmpty()
  readonly clientName: string;

  @IsNotEmptyObject()
  readonly address: ShippingAddressPrimitives;
}
