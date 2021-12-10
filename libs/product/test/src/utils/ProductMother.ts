import {
  Product,
  ProductId,
  ProductName,
  ProductPrice,
  ProductAmount,
  ProductCategories,
  ProductDescription,
  ProductImages,
  ProductIsCustom,
  ProductIsInSale,
  ProductIsLimited,
  ProductIsOutOfStock,
  ProductCustomizableParts,
  ProductSizes,
  ProductIsActive,
  //ProductDeletedAt,
  ProductCanBeSold,
  ProductPriceInSale,
  ProductDeletedAt
} from '@frappe/product/domain';
import { StringMother, UuidMother, NumberMother, BooleanMother } from '@frappe/common/test';

export class ProductMother {
  static withDeletedDate(date: Date) {
    return new Product(
      new ProductId(UuidMother.random()),
      new ProductName(StringMother.randomWord()),
      new ProductPrice(NumberMother.random()),
      new ProductCategories([UuidMother.random()]),
      new ProductDescription(StringMother.randomWord()),
      new ProductImages([StringMother.url()]),
      new ProductIsCustom(BooleanMother.random()),
      new ProductIsLimited(BooleanMother.random()),
      new ProductIsOutOfStock(BooleanMother.random()),
      new ProductCustomizableParts([StringMother.randomWord()]),
      new ProductSizes([NumberMother.random()]),
      // This is false because this method is exclusively for
      // deleting/deactivating
      new ProductIsActive(false),
      
      new ProductCanBeSold(BooleanMother.random()),
      new ProductIsInSale(BooleanMother.random()),
      new ProductPriceInSale(NumberMother.random()),
      new ProductDeletedAt(date),
      new ProductAmount(NumberMother.random()),
    );
  }
  static random(): Product {
    return new Product(
      new ProductId(UuidMother.random()),
      new ProductName(StringMother.randomWord()),
      new ProductPrice(NumberMother.random()),
      new ProductCategories([UuidMother.random()]),
      new ProductDescription(StringMother.randomWord()),
      new ProductImages([StringMother.url()]),
      new ProductIsCustom(BooleanMother.random()),
      new ProductIsLimited(BooleanMother.random()),
      new ProductIsOutOfStock(BooleanMother.random()),
      new ProductCustomizableParts([StringMother.randomWord()]),
      new ProductSizes([NumberMother.random()]),
      new ProductIsActive(true),
      new ProductCanBeSold(BooleanMother.random()),
      new ProductIsInSale(BooleanMother.random()),
      new ProductPriceInSale(NumberMother.random()),
      null,
      new ProductAmount(NumberMother.random()),
    );
  }
}
