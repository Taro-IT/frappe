import { NumberMother, StringMother, UuidMother } from '@frappe/common/test';
import { OrderItemType } from '@frappe/order/domain';

export class OrderItemMother {
  static random(): OrderItemType {
    return {
      id: UuidMother.random(),
      productId: UuidMother.random(),
      productName: StringMother.randomWord(),
      productPrice: NumberMother.randomPositive(),
      productImages: Array<string>(3).fill(StringMother.url()),
      size: NumberMother.randomPositive(),
      quantity: NumberMother.randomPositive()
    };
  }
}
