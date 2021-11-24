import { IsNotEmpty, IsNumber, IsOptional, IsUUID, ValidateNested } from "class-validator";
import { Type } from 'class-transformer'
import { OrderItemCustomPartType } from '@frappe/order/domain';
import { OrderItemCustomPartDto } from "./OrderItemCustomPart.dto";

export class OrderItemDto {
  
  @IsNotEmpty()
  @IsUUID()
  readonly productId: string;

  @IsNotEmpty()
  readonly productName: string

  @IsNotEmpty()
  @IsNumber()
  readonly productPrice: number

  @IsNotEmpty()
  readonly productImages: string[]

  @IsNotEmpty()
  @IsNumber()
  readonly size: number

  @IsNotEmpty()
  @IsNumber()
  readonly quantity: number

  @IsOptional()
  @Type(() => OrderItemCustomPartDto)
  @ValidateNested()
  readonly customParts: OrderItemCustomPartType[];

  @IsOptional()
  readonly pdfFile?: string
}