import { UuidMother, StringMother, NumberMother, BooleanMother} from "@frappe/common/test";
import {
  Product,
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
  ProductPriceInSale
} from '@frappe/product/domain';
import { ProductId, ProductName, ProductPrice } from "@frappe/product/domain";

export class ProductMother {
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
    )
  }
}
