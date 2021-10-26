import { ProductPrimitives } from '../utils';
import { ProductCategories } from './ProductCategories';
import { ProductId } from './ProductId';
import { ProductName } from './ProductName';
import { ProductPrice } from './ProductPrice';
import { ProductIsCustom } from "./ProductIsCustom";
import { ProductImages } from './ProductImages';
import { ProductDescription } from './ProductDescription';
import { ProductIsInSale } from './ProductIsInSale';
import { ProductIsLimited } from './ProductIsLimited';
import { ProductIsOutOfStock } from './ProductIsOutOfStock';
import { ProductMaterials } from './ProductMaterials';
import { ProductSizes } from './ProductSizes';
import { ProductAmount } from './ProductAmount';

export class Product {
  constructor(
    readonly id: ProductId,
    readonly name: ProductName,
    readonly price: ProductPrice,
    readonly categories: ProductCategories,
    readonly description: ProductDescription,
    readonly images: ProductImages,
    readonly isCustom: ProductIsCustom,
    readonly isInSale: ProductIsInSale,
    readonly isLimited: ProductIsLimited,
    readonly isOutOfStock: ProductIsOutOfStock,
    readonly materials: ProductMaterials,
    readonly sizes: ProductSizes,
    readonly amount?: ProductAmount
  ) {}

  static fromPrimitives(primitives: ProductPrimitives): Product {
    return new Product(
      new ProductId(primitives.id),
      new ProductName(primitives.name),
      new ProductPrice(primitives.price),
      new ProductCategories(primitives.categories),
      new ProductDescription(primitives.description),
      new ProductImages(primitives.images),
      new ProductIsCustom(primitives.isCustom),
      new ProductIsInSale(primitives.isInSale),
      new ProductIsLimited(primitives.isLimited),
      new ProductIsOutOfStock(primitives.isOutOfStock),
      new ProductMaterials(primitives.materials),
      new ProductSizes(primitives.sizes),
      new ProductAmount(primitives.amount)
    );
  }

  toPrimitives(): ProductPrimitives {
    return {
      id: this.id.value,
      name: this.name.value,
      price: this.price.value,
      categories: this.categories.value,
      description: this.description.value,
      images: this.images.value,
      isCustom: this.isCustom.value,
      isInSale: this.isInSale.value,
      isLimited: this.isLimited.value,
      isOutOfStock: this.isOutOfStock.value,
      materials: this.materials.value,
      sizes: this.sizes.value,
      amount: this.amount?.value
    };
  }
}
