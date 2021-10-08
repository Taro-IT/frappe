import {OrderNotFound, OrderRepository, OrderId} from "@frappe/order/domain";

interface Props {
  readonly orderRepository: OrderRepository
}

export class OrderFinder {
  private readonly orderRepository: OrderRepository;

  constructor({ orderRepository }: Props) {
    this.orderRepository = orderRepository;
  }

  async execute(id: string) {
    const order = await this.orderRepository.find(new OrderId(id));

    if(order === null) {
      throw new OrderNotFound(id)
    }

    return order.toPrimitives()
  }
}