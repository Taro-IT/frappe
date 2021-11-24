//FRAPPE-81
import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { PaymentSessionItemDto } from "./PaymentSessionItem.dto";

export class CreatePaymentSessionDto {

  @Type(() => PaymentSessionItemDto)
  @ValidateNested({each: true})
  readonly items: PaymentSessionItemDto[]
}