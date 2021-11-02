import { Product, ProductPrimitives, ProductRepository } from '@frappe/product/domain';
import { Criteria, Filter, FilterPrimitive, Limit, Offset, Order } from '@dinnosc/criteria';
import { OrderPrimitive } from '@frappe/common/utils';

interface ProductSearcherDeps {
  readonly productRepository: ProductRepository;
}

export class ProductSearcher {
  private readonly productRepository: ProductRepository;

  constructor({ productRepository }: ProductSearcherDeps) {
    this.productRepository = productRepository;
  }

  async execute(
    filters: FilterPrimitive<Product>[],
    order: OrderPrimitive<Product>,
    limit?: number,
    offset?: number
  ): Promise<{ products: ProductPrimitives[]; total: number }> {
    // TODO Check Criteria lib
    const criteria = new Criteria<Product>(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      { value: filters.map(filter => Filter.fromValue(filter)) },
      Order.fromValue(order.by, order.type),
      limit !== undefined ? new Limit(limit) : undefined,
      offset !== undefined ? new Offset(offset) : undefined
    );

    const dbObjects = await this.productRepository.search(criteria);

    const products = dbObjects.map(product => product.toPrimitives());
    const total = await this.productRepository.total();

    return { products, total };
  }
}
