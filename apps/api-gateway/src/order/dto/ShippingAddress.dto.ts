import { IsNotEmpty, IsOptional } from "class-validator";

export class ShippingAddressDto {
  @IsNotEmpty()
  readonly province: string;
  
  @IsNotEmpty()
  readonly city: string;

  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly zip: string;

  @IsNotEmpty()
  readonly country: string;

  @IsNotEmpty()
  readonly address1: string;

  @IsNotEmpty()
  readonly phone: string;

  @IsNotEmpty()
  readonly email: string;
  
  @IsOptional()
  readonly company?: string;
  
  @IsOptional()
  readonly address2?: string;

  @IsOptional()
  readonly reference?: string;
}