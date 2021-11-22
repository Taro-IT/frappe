// User Story: Frappe 64

import { Product, ProductId, ProductName, ProductPrice, ProductAmount, ProductCategories, ProductDescription, ProductImages, ProductIsCustom, ProductIsInSale, ProductIsLimited, ProductIsOutOfStock,ProductMaterials, ProductSizes,ProductRepository, ProductAlreadyExists, ProductIsActive, ProductCreated } from '@frappe/product/domain';
import { ProductNameFinder } from '../find/find-by-name';
import {wrapError} from '@frappe/common/utils'
import { EventDispatcher } from '@tshio/event-dispatcher';

interface Props {
  readonly productRepository: ProductRepository;
  readonly productNameFinder: ProductNameFinder;
  readonly eventBus: EventDispatcher;
}

export class ProductCreator {
  private readonly productRepository: ProductRepository;
  private readonly productNameFinder: ProductNameFinder;
  private readonly eventBus: EventDispatcher;
  constructor({ productRepository, productNameFinder, eventBus }: Props) {
    this.productRepository = productRepository;
    this.productNameFinder = productNameFinder;
    this.eventBus = eventBus;
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
    materials: string[],
    sizes: number[],
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
      new ProductIsInSale(isInSale),
      new ProductIsLimited(isLimited),
      new ProductIsOutOfStock(isOutOfStock),
      new ProductMaterials(materials),
      new ProductSizes(sizes),
      new ProductIsActive(true),
      null,
      new ProductAmount(amount)
    );
    
    await this.productRepository.save(product);
    const event = new ProductCreated(product.toPrimitives())

    this.eventBus.dispatch(event);
  }

  private async productExists(name: string) {
    const [error] = await wrapError(this.productNameFinder.execute(name))
    return error;
  }
}
