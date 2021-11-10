//User Story: frappe-91
import { OrderRepository } from '@frappe/order/domain';

interface Props {
  readonly orderRepository: OrderRepository;
}

export class OrderLister {
  private readonly orderRepository: OrderRepository;

  constructor({ orderRepository }: Props) {
    this.orderRepository = orderRepository;
  }

  async execute() {
    const orders = await this.orderRepository.all();

    return orders.map(cat => cat.toPrimitives());
  }
}
