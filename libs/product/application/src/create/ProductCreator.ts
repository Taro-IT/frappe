// User Stories: Frappe 64, frappe-508

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
  ProductRepository, 
  ProductAlreadyExists, 
  ProductIsActive,
  ProductCanBeSold,
  ProductPriceInSale,
} from '@frappe/product/domain';
import { ProductNameFinder } from '../find/find-by-name';
import {wrapError} from '@frappe/common/utils'

interface Props {
  readonly productRepository: ProductRepository;
  readonly productNameFinder: ProductNameFinder;
}

export class ProductCreator {
  private readonly productRepository: ProductRepository;
  private readonly productNameFinder: ProductNameFinder;
  constructor({ productRepository, productNameFinder }: Props) {
    this.productRepository = productRepository;
    this.productNameFinder = productNameFinder;
  }

  async execute(
    id: string,
    name: string,
    price:number,
    categories: string[],
    description:string,
    images: string[],
    isCustom: boolean,
    isInSale: boolean,
    isLimited: boolean,
    isOutOfStock: boolean,
    customizableParts: string[],
    sizes: number[],
    canBeSold: boolean,
    priceInSale: number,
    amount:number
    ) {
    
    const exists = await this.productExists(name);
    
    if (exists === null) {
      throw new ProductAlreadyExists(name);
    }
    
    const product = new Product(
      new ProductId(id),
      new ProductName(name),
      new ProductPrice(price),
      new ProductCategories(categories),
      new ProductDescription(description),
      new ProductImages(images),
      new ProductIsCustom(isCustom),
      new ProductIsLimited(isLimited),
      new ProductIsOutOfStock(isOutOfStock),
      new ProductCustomizableParts(customizableParts),
      new ProductSizes(sizes),
      new ProductIsActive(true),
      new ProductCanBeSold(canBeSold),
      new ProductIsInSale(isInSale),
      new ProductPriceInSale(priceInSale),
      null,
      new ProductAmount(amount)
    );
    
    return this.productRepository.save(product);
  }

  private async productExists(name: string) {
    const [error] = await wrapError(this.productNameFinder.execute(name))
    return error;
  }
}
