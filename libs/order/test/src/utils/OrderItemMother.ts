import { NumberMother, StringMother, UuidMother } from '@frappe/common/test';
import { OrderItemType } from '@frappe/order/domain';
import faker from 'faker';

export class OrderItemMother {

  static random(): OrderItemType {
    return {
      id: UuidMother.random(),
      productId: UuidMother.random(),
      productName: StringMother.randomWord(),
      productPrice: NumberMother.randomPositive(),
      quantity: NumberMother.randomPositive(),
      pdfFile: StringMother.url(),
    }
  }
}
