import { OrderItemType } from '@frappe/order/domain';
import { ShippingAddressPrimitives } from '@frappe/shipping/domain';
import { IsDefined, IsNotEmpty, IsNumber, IsPositive, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer'
import { ShippingAddressDto } from './ShippingAddress.dto';
import { OrderItemDto } from './OrderItem.dto';

export class CreateOrderDto {
  @IsDefined()
  @Type(() => OrderItemDto)
  @ValidateNested()
  readonly items: OrderItemType[];

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly subtotal: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly total: number;

  @IsNotEmpty()
  readonly clientName: string;

  @IsDefined()
  @Type(() => ShippingAddressDto)
  @ValidateNested()
  readonly address: ShippingAddressPrimitives
}
