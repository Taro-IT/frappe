import { ProductNotFound, ProductName, ProductRepository } from '@frappe/product/domain';

interface ProductNameFinderProps {
  readonly productRepository: ProductRepository;
}

export class ProductNameFinder {
  private readonly productRepository: ProductRepository;

  constructor({ productRepository }: ProductNameFinderProps) {
    this.productRepository = productRepository;
  }

  async execute(name: string) {
    const product = await this.productRepository.findByName(new ProductName(name));
    
    if (product === null) {
      throw new ProductNotFound(name);
    }

    return product.toPrimitives();
  }
}
