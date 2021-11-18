import {
  Order,
  OrderDateCreated,
  OrderId,
  OrderItem,
  OrderStatus,
  OrderSubtotal,
  OrderTotal,
  OrderIsDelayed,
  OrderClientName
} from '@frappe/order/domain';
import { DateMother, NumberMother, UuidMother, BooleanMother, StringMother } from '@frappe/common/test';
import { OrderStatusMother } from '.';
import { ShippingMother } from '@frappe/shipping/test'
import { OrderItemMother } from './OrderItemMother';

export class OrderMother {
  static random(): Order {
    return new Order(
      new OrderId(UuidMother.random()),
      Array<OrderItem>(3).fill(OrderItem.fromPrimitives(OrderItemMother.random())),
      new OrderSubtotal(NumberMother.randomPositive()),
      new OrderTotal(NumberMother.randomPositive()),
      new OrderDateCreated(DateMother.random()),
      new OrderStatus(OrderStatusMother.random()),
      new OrderIsDelayed(BooleanMother.random()),
      new OrderClientName(StringMother.random()),
      ShippingMother.randomAddress(),
      null
    );
  }
}
