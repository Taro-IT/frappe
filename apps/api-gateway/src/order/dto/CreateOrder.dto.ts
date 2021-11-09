import { OrderItemType } from '@frappe/order/domain';
import { ShippingAddressPrimitives } from '@frappe/shipping/domain';
import { IsDefined, IsNotEmpty, IsNumber, IsPositive, ValidateNested } from 'class-validator';
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

  @IsNotEmpty()
  readonly clientName: string;

  @IsDefined()
  @Type(() => ShippingAddressDto)
  @ValidateNested()
  readonly address: ShippingAddressPrimitives
}
