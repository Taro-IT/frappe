//User Stories: frappe-91
import { OrderItemType } from '../../utils';
import { OrderItemId } from './OrderItemId';
import { OrderItemPdfFile } from './OrderItemPdfFile';
import { OrderItemQuantity } from './OrderItemQuantity';
import { ProductId, ProductImages, ProductName, ProductPrice } from '@frappe/product/domain';
import { OrderItemSize } from '.';
export class OrderItem {

  // TODO: add customization properties
  constructor(
    readonly id: OrderItemId,
    readonly productId: ProductId,
    readonly productName: ProductName,
    readonly productPrice: ProductPrice,
    readonly productImages: ProductImages,
    readonly size: OrderItemSize,
    readonly quantity: OrderItemQuantity,
    readonly pdfFile?: OrderItemPdfFile
  ) {}

  static fromPrimitives(primitives: OrderItemType): OrderItem {
    return new OrderItem(
      new OrderItemId(primitives.id),
      new ProductId(primitives.productId),
      new ProductName(primitives.productName),
      new ProductPrice(primitives.productPrice),
      new ProductImages(primitives.productImages),
      new OrderItemSize(primitives.size),
      new OrderItemQuantity(primitives.quantity),
      new OrderItemPdfFile(primitives.pdfFile)
    );
  }

  toPrimitives(): OrderItemType {
    return {
      id: this.id.value,
      productId: this.productId.value,
      productName: this.productName.value,
      productPrice: this.productPrice.value,
      productImages: this.productImages.value,
      size: this.size.value,
      quantity: this.quantity.value,
      pdfFile: this.pdfFile?.value
    };
  }
}
