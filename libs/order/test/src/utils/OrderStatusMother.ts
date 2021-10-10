import { OrderStatuses } from '@frappe/order/domain';
import faker from 'faker';

export class OrderStatusMother {

  static random(): OrderStatuses {
    return faker.random.arrayElement(Object.values(OrderStatuses))

  }

}