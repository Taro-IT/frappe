import { UuidMother, StringMother, NumberMother, DateMother} from "@frappe/common/test";
import {
  Product, ProductAmount,
  ProductCategories,
  ProductDescription,
  ProductImages,
  ProductIsCustom,
  ProductIsInSale, ProductIsLimited, ProductIsOutOfStock, ProductMaterials, ProductSizes,ProductIsActive, ProductDeletedAt
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
      new ProductIsCustom(false),
      new ProductIsInSale(false),
      new ProductIsLimited(false),
      new ProductIsOutOfStock(false),
      new ProductMaterials([StringMother.randomWord()]),
      new ProductSizes([NumberMother.random()]),
      new ProductIsActive(true),
      new ProductDeletedAt(DateMother.random()),
      new ProductAmount(NumberMother.random()),
    )
  }
}
