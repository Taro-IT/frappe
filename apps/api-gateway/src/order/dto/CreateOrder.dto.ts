import { OrderItemType, OrderStatuses } from '@frappe/order/domain';
import { ShippingAddressPrimitives } from '@frappe/shipping/domain';
import { IsDefined, IsEnum, IsNotEmpty, IsNumber, IsObject, IsPositive, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer'
import { ShippingAddressDto } from './ShippingAddress.dto';

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

  @IsDefined()
  @Type(() => ShippingAddressDto)
  @ValidateNested()
  readonly address: ShippingAddressPrimitives
}
