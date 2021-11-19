//User Stories: frappe-91
import { AwilixContainer, asClass, asFunction } from 'awilix';
import { orderRouting } from './order.routing';
import { MongoOrderRepository } from '@frappe/order/persistance/mongodb';
import { OrderCreator, OrderFinder, OrderLister, OrderPdfGenerator } from '@frappe/order/application';

export const registerOrderModule = (container: AwilixContainer) => {
  container.register({
    orderRepository: asClass(MongoOrderRepository).singleton(),
    orderFinder: asClass(OrderFinder).singleton(),
    orderLister: asClass(OrderLister).singleton(),
    orderCreator: asClass(OrderCreator).singleton(),
    orderRouting: asFunction(orderRouting).singleton(),
    orderPdfGenerator: asClass(OrderPdfGenerator).singleton()
  });
};
