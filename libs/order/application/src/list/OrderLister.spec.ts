import {Order, OrderRepository} from "@frappe/order/domain";
import {OrderLister} from "./OrderLister";
import { mock, MockProxy } from 'jest-mock-extended'
import {OrderMother} from "@frappe/order/test";


describe('OrderLister', () => {
  let orderRepository: MockProxy<OrderRepository>;

  let lister: OrderLister;

  beforeEach(() => {
    orderRepository = mock<OrderRepository>();

    lister = new OrderLister({ orderRepository });
  })

  it('should list all orders', async () => {
    
    const orders = new Array<Order>(5).fill(OrderMother.random())
    
    orderRepository.all.mockResolvedValueOnce(orders);
    await lister.execute();
    expect(orderRepository.all).toReturn()
  });

  it('should return an empty object', async () => {
    const orders: Order[] = []
    orderRepository.all.mockResolvedValueOnce(orders);
    await lister.execute();
    expect(orderRepository.all).toReturn()
  });
});
