import {Order, OrderDateCreated, OrderId, OrderItem, OrderStatus, OrderSubtotal, OrderTotal } from "@frappe/order/domain";
import {DateMother, NumberMother, UuidMother} from "@frappe/common/test";
import { OrderStatusMother } from ".";
import { OrderItemMother } from "./OrderItemMother";

export class OrderMother {

  static random(): Order {
    return new Order(
      new OrderId(UuidMother.random()),
      Array<OrderItem>(3).fill(OrderItem.fromPrimitives(OrderItemMother.random())),
      new OrderSubtotal(NumberMother.randomPositive()),
      new OrderTotal(NumberMother.randomPositive()),
      new OrderDateCreated(DateMother.random()),
      new OrderStatus(OrderStatusMother.random())
    )
  }
}
