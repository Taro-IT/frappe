import { Product, ProductId, ProductName, ProductPrice, ProductAmount, ProductCategories, ProductDescription, ProductImages, ProductIsCustom, ProductIsInSale, ProductIsLimited, ProductIsOutOfStock,ProductMaterials, ProductSizes, ProductIsActive } from '@frappe/product/domain';
import { StringMother, UuidMother, NumberMother, BooleanMother } from '@frappe/common/test';

export class ProductMother {
  static random(): Product {
    return new Product(
      new ProductId(UuidMother.random()),
      new ProductName(StringMother.randomWord()),
      new ProductPrice(NumberMother.randomPositive()),
      new ProductCategories([UuidMother.random(),UuidMother.random()]),
      new ProductDescription(StringMother.random()),
      new ProductImages([UuidMother.random(),UuidMother.random()]),
      new ProductIsCustom(BooleanMother.random()),
      new ProductIsInSale(BooleanMother.random()),
      new ProductIsLimited(BooleanMother.random()),
      new ProductIsOutOfStock(BooleanMother.random()),
      new ProductMaterials([UuidMother.random(),UuidMother.random()]),
      new ProductSizes([NumberMother.randomPositive(),NumberMother.randomPositive()]),
      new ProductIsActive(true),
      null,
      new ProductAmount(NumberMother.randomPositive()),
    );
  }
}
