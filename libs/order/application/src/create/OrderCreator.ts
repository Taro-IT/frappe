import {
  Order,
  OrderAlreadyExists,
  OrderDateCreated,
  OrderId,
  OrderItem,
  OrderItemType,
  OrderRepository,
  OrderStatus,
  OrderStatuses,
  OrderSubtotal,
  OrderTotal
} from '@frappe/order/domain';
import { OrderFinder } from '..';

// SOLID
// Una Clase por lo general solo debe tener un método público

interface Props {
  readonly orderRepository: OrderRepository;
  readonly orderFinder: OrderFinder;
}

export class OrderCreator {
  private readonly orderRepository: OrderRepository;
  private readonly orderFinder: OrderFinder;

  constructor({ orderRepository, orderFinder }: Props) {
    this.orderRepository = orderRepository;
    this.orderFinder = orderFinder;
  }

  async execute(
    id: string,
    items: OrderItemType[],
    subtotal: number,
    total: number,
    dateCreated: Date,
    status: OrderStatuses
  ) {
    const exists = await this.orderExists(id);

    if (exists === null) {
      throw new OrderAlreadyExists(id);
    }

    const order = new Order(
      new OrderId(id),
      items.map(item => OrderItem.fromPrimitives(item)),
      new OrderSubtotal(subtotal),
      new OrderTotal(total),
      new OrderDateCreated(dateCreated),
      new OrderStatus(status)
    );
    return this.orderRepository.save(order);
  }

  private async orderExists(id: string) {
    try {
      await this.orderFinder.execute(id);
      return null;
    } catch (error) {
      return error;
    }
  }
}
