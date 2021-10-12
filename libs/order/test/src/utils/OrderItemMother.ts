import { NumberMother, StringMother, UuidMother } from '@frappe/common/test';
import { OrderItem, OrderItemId, OrderItemPdfFile, OrderItemQuantity, OrderItemType } from '@frappe/order/domain';
import { ProductId, ProductName, ProductPrice } from '@frappe/product/domain';
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

  static randomWord(): string {
    return faker.lorem.word();
  }

  static email(): string {
    return faker.internet.email();
  }

}
