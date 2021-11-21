//User story: frappe-64
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsPositive()
  readonly price: number;

  @IsOptional()
  @IsPositive()
  readonly amount: number;

  @IsNotEmpty()
  @IsString({
      each: true
  })
  readonly categories: string[];

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsString({
      each: true
  })
  readonly images: string[];

  @IsNotEmpty()
  @IsBoolean()
  readonly isCustom: boolean;

  @IsNotEmpty()
  @IsBoolean()
  readonly isInSale: boolean;

  @IsNotEmpty()
  @IsBoolean()
  readonly isLimited: boolean;

  @IsNotEmpty()
  @IsBoolean()
  readonly isOutOfStock: boolean;


  @IsOptional()
  @IsString({
      each: true
  })
  readonly customizableParts: string[];
      
  @IsNotEmpty()
  @IsNumber({},{
      each:true
  })
  @IsPositive({
    each:true
  })
  readonly sizes: number[];

  @IsNotEmpty()
  @IsBoolean()
  readonly canBeSold: boolean;

  @IsOptional()
  @IsPositive()
  readonly priceInSale: number;

}
