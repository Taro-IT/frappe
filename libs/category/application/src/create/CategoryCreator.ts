import {Order, OrderAlreadyExists, OrderId, OrderName, OrderRepository} from "@frappe/order/domain";
import { OrderNameFinder } from "../find";


// SOLID
// Una Clase por lo general solo debe tener un método público

interface Props {
  readonly orderRepository: OrderRepository;
  readonly orderNameFinder: OrderNameFinder;
}

export class OrderCreator {
  private readonly orderNameFinder: OrderNameFinder;
  private readonly orderRepository: OrderRepository;

  constructor({ orderRepository, orderNameFinder }: Props) {
    this.orderRepository = orderRepository;
    this.orderNameFinder = orderNameFinder;
  }

  async execute(id: string, name: string) {
    const exists = await this.orderExists(name)

    if(exists === null) {
      throw new OrderAlreadyExists(name);
    }

    const order = new Order(new OrderId(id), new OrderName(name));
    return this.orderRepository.save(order);
  }

  private async orderExists(name: string) {
    try {
      await this.orderNameFinder.execute(name)
      return null
    } catch (error) {
      return error
    }
  }
}
