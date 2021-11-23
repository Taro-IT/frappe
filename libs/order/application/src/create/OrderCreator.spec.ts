import { OrderAlreadyExists, OrderNotFound, OrderRepository } from '@frappe/order/domain';
import { OrderCreator } from './OrderCreator';
import { OrderFinder } from '../find';
import { mock, MockProxy, DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { OrderMother } from '@frappe/order/test';

describe('OrderCreator', () => {
  let orderRepository: MockProxy<OrderRepository>;
  let orderFinder: DeepMockProxy<OrderFinder>;

  let creator: OrderCreator;

  beforeEach(() => {
    orderRepository = mock<OrderRepository>();
    orderFinder = mockDeep<OrderFinder>(new OrderFinder({ orderRepository }));

    creator = new OrderCreator({ orderRepository, orderFinder });
  });

  it('should create a new Order', async () => {
    const order = OrderMother.random();

    console.log(order.items[0]);
    
    orderRepository.find.mockRejectedValueOnce(OrderNotFound);
    await creator.execute(
        order.id.value,
        order.items.map(item => item.toPrimitives()),
        order.subtotal.value,
        order.total.value,
        order.clientName?.value,
        order.address?.toPrimitives(),
        order.pdfFile?.value
        );
    expect(orderRepository.save).toHaveReturned()
  });

  it('should throw a OrderAlreadyExist error', async () => {
    const order = OrderMother.random();

    orderRepository.find.mockResolvedValue(order);
    const response = () => creator.execute(order.id.value,
      order.items.map(item => item.toPrimitives()),
      order.subtotal.value,
      order.total.value,
      order.clientName?.value,
      order.address?.toPrimitives(),
      order.pdfFile?.value);

    await expect(async () => response()).rejects.toThrow(OrderAlreadyExists);
  });
});
