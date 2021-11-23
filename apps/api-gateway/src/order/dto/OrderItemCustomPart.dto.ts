import { IsNotEmpty } from "class-validator";

export class OrderItemCustomPartDto {
  @IsNotEmpty()
  readonly section: string;

  @IsNotEmpty()
  readonly material: string
}