import { NumberMother, StringMother, UuidMother } from '@frappe/common/test';
import { OrderItemCustomPartType, OrderItemType } from '@frappe/order/domain';
import { OrderItemCustomPartMother } from './OrderItemCustomPartMother';

export class OrderItemMother {
  static random(): OrderItemType {
    return {
      productId: UuidMother.random(),
      productName: StringMother.randomWord(),
      productPrice: NumberMother.randomPositive(),
      productImages: Array<string>(3).fill(StringMother.url()),
      size: NumberMother.randomPositive(),
      quantity: NumberMother.randomPositive(),
      customParts: Array<OrderItemCustomPartType>(3).fill(OrderItemCustomPartMother.random()),
    };
  }
}
