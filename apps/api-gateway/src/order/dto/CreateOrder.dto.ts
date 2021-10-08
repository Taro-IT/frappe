import { OrderItemType, OrderStatuses } from "@frappe/order/domain";
import { IsDateString, IsEnum, IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class CreateOrderDto {
    @IsNotEmpty()
    readonly items: OrderItemType[]

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly subtotal: number

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly total: number

    @IsNotEmpty()
    @IsDateString()
    readonly dateCreated: Date

    @IsEnum(OrderStatuses)
    readonly status: OrderStatuses
}