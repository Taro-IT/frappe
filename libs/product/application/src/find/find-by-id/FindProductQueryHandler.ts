import { QueryHandler } from '@tshio/query-bus';
import { FindProductQuery } from './FindProductQuery';
import { ProductFinder } from './ProductFinder';
import { ProductPrimitives } from '@frappe/product/domain';

type Props = {
  readonly productNameFinder: ProductFinder;
};

interface FindProductQueryHandlerResult {
  readonly result: ProductPrimitives;
}

export class FindProductQueryHandler implements QueryHandler<FindProductQuery, FindProductQueryHandlerResult> {
  private readonly ProductNameFinder: ProductFinder;

  readonly queryType = FindProductQuery.name;

  constructor({ productNameFinder }: Props) {
    this.ProductNameFinder = productNameFinder;
  }

  async execute(Query: FindProductQuery) {
    const { id } = Query.payload;

    const result = await this.ProductNameFinder.execute(id);
    return { result };
  }
}
