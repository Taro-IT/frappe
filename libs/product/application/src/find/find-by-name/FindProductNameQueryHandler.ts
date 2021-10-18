import { QueryHandler } from '@tshio/query-bus';
import { FindProductNameQuery } from './FindProductNameQuery';
import { ProductNameFinder } from './ProductNameFinder';
import { ProductPrimitives } from '@frappe/product/domain';

type Props = {
  readonly productNameFinder: ProductNameFinder;
};

interface FindProductQueryHandlerResult {
  readonly result: ProductPrimitives;
}

export class FindProductNameQueryHandler
  implements QueryHandler<FindProductNameQuery, FindProductQueryHandlerResult>
{
  private readonly ProductNameFinder: ProductNameFinder;

  readonly queryType = FindProductNameQuery.name;

  constructor({ productNameFinder }: Props) {
    this.ProductNameFinder = productNameFinder;
  }

  async execute(Query: FindProductNameQuery) {
    const { name } = Query.payload;

    const result = await this.ProductNameFinder.execute(name);
    return { result };
  }
}
