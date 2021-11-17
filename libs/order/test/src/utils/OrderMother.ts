import {
  Order,
  OrderDateCreated,
  OrderId,
  OrderItem,
  OrderStatus,
  OrderSubtotal,
  OrderTotal,
  OrderIsDelayed,
  OrderClientName,
  OrderStatuses
} from '@frappe/order/domain';
import { ShippingMother } from '@frappe/shipping/test'
import { NumberMother, UuidMother, StringMother } from '@frappe/common/test';
import { OrderItemMother } from './OrderItemMother';

export class OrderMother {
  static random(): Order {
    return new Order(
      new OrderId(UuidMother.random()),
      Array<OrderItem>(3).fill(OrderItem.fromPrimitives(OrderItemMother.random())),
      new OrderSubtotal(NumberMother.randomPositive()),
      new OrderTotal(NumberMother.randomPositive()),
      new OrderDateCreated(new Date(Date.now())),
      new OrderStatus(OrderStatuses.ABIERTO),
      new OrderIsDelayed(false),
      new OrderClientName(StringMother.randomWord()),
      ShippingMother.randomAddress(),
    );
  }
}
