//User story: frappe-507
import { OrderRepository, OrderNotFound } from '@frappe/order/domain';
import { OrderUpdater } from './OrderUpdater';
import { OrderFinder } from '../find';
import { mock, MockProxy, DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { OrderMother } from '@frappe/order/test';

describe('OrderUpdater', () => {
  let orderRepository: MockProxy<OrderRepository>;
  let orderFinder: DeepMockProxy<OrderFinder>;

  let updater: OrderUpdater;

  beforeEach(() => {
    orderRepository = mock<OrderRepository>();
    orderFinder = mockDeep<OrderFinder>(new OrderFinder({ orderRepository }));

    updater = new OrderUpdater({ orderRepository, orderFinder });
  });

  it('should update an existent Order', async () => {
    const order = OrderMother.random();

    orderRepository.find.mockResolvedValueOnce(order);
    await updater.execute(order.id.value, order.status.value);

    expect(orderRepository.save).toHaveBeenCalledWith(order);
  });

  it('should throw a OrderNotFound error', async () => {
    const order = OrderMother.random();

    orderRepository.find.mockRejectedValueOnce(OrderNotFound);

    const response = () => updater.execute(order.id.value, order.status.value);

    await expect(async () => response()).rejects.toThrow(OrderNotFound);
  });
});