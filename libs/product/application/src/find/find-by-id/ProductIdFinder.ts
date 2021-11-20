import { ProductNotFound, ProductId, ProductRepository } from '@frappe/product/domain';

interface ProductIdFinderProps {
  readonly productRepository: ProductRepository;
}

export class ProductIdFinder {
  private readonly productRepository: ProductRepository;

  constructor({ productRepository }: ProductIdFinderProps) {
    this.productRepository = productRepository;
  }

  async execute(id: string) {
    const product = await this.productRepository.find(new ProductId(id));
    if (product === null) {
      throw new ProductNotFound(id);
    }

    return product.toPrimitives();
  }
}
