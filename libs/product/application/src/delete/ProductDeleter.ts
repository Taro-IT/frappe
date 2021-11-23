import { Product, ProductNotFound, ProductRepository, ProductPrimitives} from '@frappe/product/domain';
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

  async execute(id: string, deletedAt = new Date()) {
    const product = await this.productExists(id);

    if (product === null) {
      throw new ProductNotFound(id);
    }

    const isActive = false;
    const updatedProduct: ProductPrimitives = { ...product, isActive, deletedAt };

    return this.productRepository.save(Product.fromPrimitives(updatedProduct));
  }

  private async productExists(id: string) {
    try {
      const product = await this.productFinder.execute(id);
      return product as ProductPrimitives;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
