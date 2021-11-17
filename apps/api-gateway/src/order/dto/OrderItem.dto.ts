import { IsNotEmpty, IsNumber, IsOptional, IsUUID } from "class-validator";

export class OrderItemDto {
  @IsNotEmpty()
  @IsUUID()
  readonly id: string
  
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
  readonly pdfFile?: string
}