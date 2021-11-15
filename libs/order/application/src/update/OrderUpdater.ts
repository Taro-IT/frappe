//User story: frappe-507
import {
    OrderRepository,
    OrderNotFound,
    OrderPrimitives,
    Order,
    OrderStatuses,
  } from '@frappe/order/domain';
  import { OrderFinder } from '../find';
  
  interface Props {
    readonly orderRepository: OrderRepository;
    readonly orderFinder: OrderFinder;
  }
  
  export class OrderUpdater {
    private readonly orderRepository: OrderRepository;
    private readonly orderFinder: OrderFinder;
  
    constructor({ orderRepository, orderFinder }: Props) {
      this.orderRepository = orderRepository;
      this.orderFinder = orderFinder;
    }
  
    async execute(id: string, status: OrderStatuses) {
      const order = await this.orderExists(id);
  
      if (order === null) {
        throw new OrderNotFound(id);
      }
  
      const updatedOrder: OrderPrimitives = { ...order, status };
  
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
  