import { OrderPrimitives } from "../utils";
import { OrderItem } from "./order-items/OrderItem";
import { OrderDateCreated } from "./OrderDateCreated";
import { OrderId } from "./OrderId";
import { OrderStatus } from "./OrderStatus";
import { OrderSubtotal } from "./OrderSubtotal";
import { OrderTotal } from "./OrderTotal";

export class Order {
  constructor(
    readonly id: OrderId,
    readonly items: OrderItem[],
    readonly subtotal: OrderSubtotal,
    readonly total: OrderTotal,
    readonly dateCreated: OrderDateCreated,
    readonly status: OrderStatus
  ) {}


  static fromPrimitives(primitives: OrderPrimitives): Order {
    return new Order(
      new OrderId(primitives.id),
      primitives.items.map(item => OrderItem.fromPrimitives(item)),
      new OrderSubtotal(primitives.subtotal),
      new OrderTotal(primitives.total),
      new OrderDateCreated(primitives.dateCreated),
      new OrderStatus(primitives.status),
    );
  }

  toPrimitives(): OrderPrimitives {
    return {
      id: this.id.value,
      items: this.items.map(item => item.toPrimitives()),
      subtotal: this.subtotal.value,
      total: this.total.value,
      dateCreated: this.dateCreated.value,
      status: this.status.value
    }
  }
}