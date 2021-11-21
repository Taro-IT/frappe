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
import { ProductCustomizableParts } from './ProductCustomizableParts';
import { ProductSizes } from './ProductSizes';
import { ProductAmount } from './ProductAmount';
import { ProductIsActive} from './ProductIsActive'
import { ProductDeletedAt} from './ProductDeletedAt'
import { ProductCanBeSold } from './ProductCanBeSold';
import {ProductPriceInSale} from './ProductPriceInSale';

export class Product {
  constructor(
    readonly id: ProductId,
    readonly name: ProductName,
    readonly price: ProductPrice,
    readonly categories: ProductCategories,
    readonly description: ProductDescription,
    readonly images: ProductImages,
    readonly isCustom: ProductIsCustom,
    readonly isLimited: ProductIsLimited,
    readonly isOutOfStock: ProductIsOutOfStock,
    readonly customizableParts: ProductCustomizableParts,
    readonly sizes: ProductSizes,
    readonly isActive: ProductIsActive,
    readonly canBeSold : ProductCanBeSold,
    readonly isInSale?: ProductIsInSale,
    readonly priceInSale?: ProductPriceInSale,
    readonly deletedAt?: ProductDeletedAt,
    readonly amount?: ProductAmount,
    
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
      new ProductIsLimited(primitives.isLimited),
      new ProductIsOutOfStock(primitives.isOutOfStock),
      new ProductCustomizableParts(primitives.customizableParts),
      new ProductSizes(primitives.sizes),
      new ProductIsActive(primitives.isActive),
      new ProductCanBeSold(primitives.canBeSold),
      new ProductIsInSale(primitives.isInSale),
      new ProductPriceInSale(primitives.priceInSale),
      new ProductDeletedAt(primitives.deletedAt),
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
      isLimited: this.isLimited.value,
      isOutOfStock: this.isOutOfStock.value,
      customizableParts: this.customizableParts.value,
      sizes: this.sizes.value,
      isActive: this.isActive.value,
      canBeSold: this.canBeSold.value,
      isInSale: this.isInSale?.value,
      priceInSale: this.priceInSale?.value,
      deletedAt: this.deletedAt?.value,
      amount: this.amount?.value
    };
  }
}
