//FRAPPE-81
import { IsNumber, IsUUID, Min } from "class-validator";

export class PaymentSessionItemDto {

  @IsUUID()
  readonly id: string

  @IsNumber()
  @Min(1)
  readonly quantity: number
}