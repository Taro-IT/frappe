//User story: frappe-507
import {
    OrderRepository,
    OrderNotFound,
    OrderPrimitives,
    Order,
    OrderStatuses,
    OrderUpdateStatus,
  } from '@frappe/order/domain';
  import { OrderFinder } from '../find';
  import { EventDispatcher } from '@tshio/event-dispatcher';
  
  interface Props {
    readonly orderRepository: OrderRepository;
    readonly orderFinder: OrderFinder;
    readonly eventBus: EventDispatcher;
  }
  
  export class OrderUpdater {
    private readonly orderRepository: OrderRepository;
    private readonly orderFinder: OrderFinder;
    private readonly eventBus: EventDispatcher;
  
    constructor({ orderRepository, orderFinder, eventBus }: Props) {
      this.orderRepository = orderRepository;
      this.orderFinder = orderFinder;
      this.eventBus = eventBus;
    }
  
    async execute(id: string, status: OrderStatuses) {
      const order = await this.orderExists(id);
  
      if (order === null) {
        throw new OrderNotFound(id);
      }
      
  
      const updatedOrder: OrderPrimitives = { ...order, status };

      if(status != order.status)
        await this.eventBus.dispatch(new OrderUpdateStatus(updatedOrder));

      return this.orderRepository.save(Order.fromPrimitives(updatedOrder));
    }
  
    private async orderExists(id: string) {
      try {
        const order = await this.orderFinder.execute(id);
        return order as OrderPrimitives;
      } catch (error) {
        console.log(error);
        return null;
      }
    }
  }
  