import { ProductId, ProductNotFound, ProductRepository } from '@frappe/product/domain';
import { ProductFinder } from '../find/find-by-id';

interface Props {
  readonly productRepository: ProductRepository;
  readonly productFinder: ProductFinder;
}

export class ProductDeleter {
  private readonly productFinder: ProductFinder;
  private readonly productRepository: ProductRepository;

  constructor({ productRepository, productFinder }: Props) {
    this.productRepository = productRepository;
    this.productFinder = productFinder;
  }

  async execute(id: string) {
    const exists = await this.productExists(id);

    if (exists !== null) {
      throw new ProductNotFound(id);
    }

    return this.productRepository.delete(new ProductId(id));
  }

  private async productExists(id: string) {
    try {
      await this.productFinder.execute(id);
      return null;
    } catch (error) {
      return error;
    }
  }
}
