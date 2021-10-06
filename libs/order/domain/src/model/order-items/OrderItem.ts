import { OrderItemType } from "../../utils";
import { OrderItemId } from "./OrderItemId";
import { OrderItemPdfFile } from "./OrderItemPdfFile";
import { OrderItemQuantity } from "./OrderItemQuantity";
import { ProductId, ProductName, ProductPrice } from '@frappe/product/domain'
export class OrderItem {
  
  constructor(
    readonly id: OrderItemId,
    readonly productId: ProductId,
    readonly productName: ProductName,
    readonly productPrice: ProductPrice,
    readonly quantity: OrderItemQuantity,
    readonly pdfFile?: OrderItemPdfFile
  ) {}

  static fromPrimitives(primitives: OrderItemType): OrderItem {
    return new OrderItem(
      new OrderItemId(primitives.id),
      new ProductId(primitives.productId),
      new ProductName(primitives.productName),
      new ProductPrice(primitives.productPrice),
      new OrderItemQuantity(primitives.quantity),
      new OrderItemPdfFile(primitives.pdfFile)
    )
  }

  toPrimitives(): OrderItemType {
    return {
      id: this.id.value,
      productId: this.productId.value,
      productName: this.productName.value,
      productPrice: this.productPrice.value,
      quantity: this.quantity.value,
      pdfFile: this.pdfFile.value

    }
  }
}