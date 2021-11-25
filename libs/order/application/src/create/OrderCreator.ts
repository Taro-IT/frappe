 // User Story: Frappe 981
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
  OrderClientName,
  OrderGenerated,
  OrderPrimitives
} from '@frappe/order/domain';
import { ShippingAddress, ShippingAddressPrimitives } from '@frappe/shipping/domain';
import { OrderPdfFile } from '@frappe/order/domain';
import { OrderFinder } from '..';
import { EventDispatcher } from '@tshio/event-dispatcher';

// SOLID
// Una Clase por lo general solo debe tener un método público

interface Props {
  readonly orderRepository: OrderRepository;
  readonly orderFinder: OrderFinder;
  readonly eventBus: EventDispatcher;
}

export class OrderCreator {
  private readonly orderRepository: OrderRepository;
  private readonly orderFinder: OrderFinder;
  private readonly eventBus: EventDispatcher;

  constructor({ orderRepository, orderFinder, eventBus }: Props) {
    this.orderRepository = orderRepository;
    this.orderFinder = orderFinder;
    this.eventBus = eventBus;
  }

  async execute(
    id: string,
    items: OrderItemType[],
    subtotal: number,
    total: number,
    clientName?: string,
    address?: ShippingAddressPrimitives,
    pdfFile?: string
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
      new OrderDateCreated(new Date()),
      new OrderStatus(OrderStatuses.ABIERTO),
      new OrderIsDelayed(false),
      new OrderClientName(clientName),
      ShippingAddress.fromPrimitives(address ? address : undefined),
      new OrderPdfFile(pdfFile ? pdfFile : undefined)
    );

    const newOrder : OrderPrimitives = order.toPrimitives();
    await this.eventBus.dispatch(new OrderGenerated(newOrder));
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
