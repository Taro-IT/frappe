import { StringMother } from '@frappe/common/test';
import { OrderItemCustomPartType } from '@frappe/order/domain';

export class OrderItemCustomPartMother {
  static random(): OrderItemCustomPartType {
    return {
      section: StringMother.randomWord(),
      material: StringMother.randomWord(),
    };
  }
}
