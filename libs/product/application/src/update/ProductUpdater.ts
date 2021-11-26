// User Story: Frappe 59

import { wrapError } from '@frappe/common/utils';
import {
  ProductRepository,
  ProductNotFound,
  ProductPrimitives,
  Product,
  ProductAlreadyExists
} from '@frappe/product/domain';
import { ProductIdFinder, ProductNameFinder } from '../find';

interface Props {
  readonly productRepository: ProductRepository;
  readonly productIdFinder: ProductIdFinder;
  readonly productNameFinder: ProductNameFinder;
}

export class ProductUpdater {
  private readonly productRepository: ProductRepository;
  private readonly productIdFinder: ProductIdFinder;
  private readonly productNameFinder: ProductNameFinder;

  constructor({ productRepository, productIdFinder, productNameFinder }: Props) {
    this.productRepository = productRepository;
    this.productIdFinder = productIdFinder;
    this.productNameFinder = productNameFinder;
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
    
    if (product === null) {
      throw new ProductNotFound(id);
    }

    const exists = await this.productNameExists(name);

    if (exists === null) {
      throw new ProductAlreadyExists(name);
    }

    const updatedProduct: ProductPrimitives = {
      ...product,
      name: name ? name : product.name,
      price: price ? price : product.price ,
      categories: categories ? categories : product.categories ,
      description: description ? description : product.description ,
      images: images ? images : product.images ,
      isCustom: isCustom ? isCustom : product.isCustom ,
      isInSale: isInSale ? isInSale : product.isInSale ,
      isLimited: isLimited ? isLimited : product.isLimited ,
      isOutOfStock: isOutOfStock ? isOutOfStock : product.isOutOfStock ,
      customizableParts: customizableParts ? customizableParts : product.customizableParts ,
      sizes: sizes ? sizes : product.sizes ,
      canBeSold: canBeSold ? canBeSold : product.canBeSold ,
      priceInSale: priceInSale ? priceInSale : product.priceInSale ,
      amount: amount ? amount : product.amount
    };

    return this.productRepository.save(Product.fromPrimitives(updatedProduct));
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
