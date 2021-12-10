// User Story: Frappe 59

import { wrapError } from '@frappe/common/utils';
import {
  ProductRepository,
  ProductNotFound,
  ProductPrimitives,
  Product,
  ProductAlreadyExists,
  ProductUpdated
} from '@frappe/product/domain';
import { EventDispatcher } from '@tshio/event-dispatcher';
import { ProductIdFinder, ProductNameFinder } from '../find';

interface Props {
  readonly productRepository: ProductRepository;
  readonly productIdFinder: ProductIdFinder;
  readonly productNameFinder: ProductNameFinder;
  readonly eventBus: EventDispatcher;
}

export class ProductUpdater {
  private readonly productRepository: ProductRepository;
  private readonly productIdFinder: ProductIdFinder;
  private readonly productNameFinder: ProductNameFinder;
  private readonly eventBus: EventDispatcher;

  constructor({ productRepository, productIdFinder, productNameFinder, eventBus }: Props) {
    this.productRepository = productRepository;
    this.productIdFinder = productIdFinder;
    this.productNameFinder = productNameFinder;
    this.eventBus = eventBus;
  }

  async execute(
    id: string,
    name?: string,
    price?:number,
    categories?: string[],
    description?:string,
    images?: string[],
    isCustom?: boolean,
    isInSale?: boolean,
    isLimited?: boolean,
    isOutOfStock?: boolean,
    customizableParts?: string[],
    sizes?: number[],
    canBeSold?: boolean,
    priceInSale?: number,
    amount?:number
    ) {
      
    const product = await this.productExists(id);

    this.checkForErrors(product, id, name);

    const updatedProduct: ProductPrimitives = {
      ...product,
      name: name ?? product.name,
      price: price ?? product.price ,
      categories: categories ?? product.categories ,
      description: description ?? product.description ,
      images: images ?? product.images ,
      isCustom: isCustom ?? product.isCustom ,
      isInSale: isInSale ?? product.isInSale ,
      isLimited: isLimited ?? product.isLimited ,
      isOutOfStock: isOutOfStock ?? product.isOutOfStock ,
      customizableParts: customizableParts ?? product.customizableParts ,
      sizes: sizes ?? product.sizes ,
      canBeSold: canBeSold ?? product.canBeSold ,
      priceInSale: priceInSale ?? product.priceInSale ,
      amount: amount ?? product.amount
    };

    await this.productRepository.save(Product.fromPrimitives(updatedProduct));

    const event = new ProductUpdated(updatedProduct)
    this.eventBus.dispatch(event);
  }

  private async checkForErrors(product, id, name)
  {
    if (product === null) {
      throw new ProductNotFound(id);
    }

    const exists = await this.productNameExists(name);

    if (exists === null) {
      throw new ProductAlreadyExists(name);
    }
  }

  private async productNameExists(name: string) {
    const [error] = await wrapError(this.productNameFinder.execute(name))
    return error;
  }

  private async productExists(id: string) {
    try {
      const product = await this.productIdFinder.execute(id);
      return product as ProductPrimitives;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
