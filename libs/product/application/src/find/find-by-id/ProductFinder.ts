import { ProductNotFound, ProductRepository, ProductId } from '@frappe/product/domain';

interface Props {
  readonly productRepository: ProductRepository;
}

export class ProductFinder {
  private readonly productRepository: ProductRepository;

  constructor({ productRepository }: Props) {
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
