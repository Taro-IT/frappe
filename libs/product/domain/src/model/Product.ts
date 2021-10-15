import { ProductPrimitives } from '../utils';
import { ProductId } from './ProductId';
import { ProductName } from './ProductName';
import { ProductPrice } from './ProductPrice';

export class Product {
  constructor(readonly id: ProductId, readonly name: ProductName, readonly price: ProductPrice) {}

  toPrimitives() {
    return {
      id: this.id.value,
      name: this.name.value,
      price: this.price.value
    };
  }

  static fromPrimitives(primitives: ProductPrimitives): Product {
    return new Product(
      new ProductId(primitives.id),
      new ProductName(primitives.name),
      new ProductPrice(primitives.price)
    );
  }
}
