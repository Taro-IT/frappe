//User story: frappe-59
import { IsBoolean, IsNumber, IsOptional, IsPositive, IsString, Min } from "class-validator";

export class UpdateProductDto {

  @IsOptional()
  readonly name: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  readonly price: number;

  @IsOptional()
  @IsPositive()
  readonly amount: number;

  @IsOptional()
  @IsString({
      each: true
  })
  readonly categories: string[];

  @IsOptional()
  @IsString()
  readonly description: string;

  @IsOptional()
  @IsString({
      each: true
  })
  readonly images: string[];

  @IsOptional()
  @IsBoolean()
  readonly isCustom: boolean;

  @IsOptional()
  @IsBoolean()
  readonly isInSale: boolean;

  @IsOptional()
  @IsBoolean()
  readonly isLimited: boolean;

  @IsOptional()
  @IsBoolean()
  readonly isOutOfStock: boolean;

  @IsOptional()
  @IsString({
      each: true
  })
  readonly customizableParts: string[];
      
  @IsOptional()
  @IsNumber({},{
      each:true
  })
  @IsPositive({
    each:true
  })
  readonly sizes: number[];

  @IsOptional()
  @IsBoolean()
  readonly canBeSold: boolean;

  @IsOptional()
  @IsPositive()
  readonly priceInSale: number;
}