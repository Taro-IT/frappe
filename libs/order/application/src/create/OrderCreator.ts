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
  OrderTotal,
  OrderSubtotal,
  OrderIsDelayed,
  OrderClientName
} from '@frappe/order/domain';
import { ShippingAddress, ShippingAddressPrimitives } from '@frappe/shipping/domain';
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
    clientName?: string,
    address?: ShippingAddressPrimitives
  ) {
    const exists = await this.orderExists(id);

    if (exists === null) {
      throw new OrderAlreadyExists(id);
    }

    console.log(address)
    let order : Order;
    if(address)
    {
      order = new Order(
        new OrderId(id),
        items.map(item => OrderItem.fromPrimitives(item)),
        new OrderSubtotal(subtotal),
        new OrderTotal(total),
        new OrderDateCreated(new Date()),
        new OrderStatus(OrderStatuses.ABIERTO),
        new OrderIsDelayed(false),
        new OrderClientName(clientName),
        ShippingAddress.fromPrimitives(address)
      );
    }
    else
    {
      order = new Order(
        new OrderId(id),
        items.map(item => OrderItem.fromPrimitives(item)),
        new OrderSubtotal(subtotal),
        new OrderTotal(total),
        new OrderDateCreated(new Date()),
        new OrderStatus(OrderStatuses.ABIERTO),
        new OrderIsDelayed(false),
        new OrderClientName(clientName)
      );
    }
    
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
