import { ProductName, ProductPrice } from ".";
import { ProductPrimitives } from "../utils/ProductPrimitives";
import { ProductId } from "./ProductId";

export class Product {
  constructor(
    readonly id: ProductId,
    readonly name: ProductName,
    readonly price: ProductPrice
  ) {}

  toPrimitives(primitives: ProductPrimitives) {
    return {
      id: this.id.value,
      name: this.name.value,
      price: this.price.value,
     
    }
  }

  static fromPrimitives(primitives: ProductPrimitives): Product {
    return new Product(
      new ProductId(primitives.id),
      new ProductName(primitives.name),
      new ProductPrice(primitives.price)
    )
  }

}