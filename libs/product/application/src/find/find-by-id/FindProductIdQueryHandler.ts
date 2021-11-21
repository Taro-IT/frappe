//User story: Frappe-62
import { QueryHandler } from '@tshio/query-bus';
import { FindProductIdQuery } from './FindProductIdQuery';
import { ProductIdFinder } from './ProductIdFinder';
import { ProductPrimitives } from '@frappe/product/domain';

type FindProductIdQueryHandlerProps = {
  readonly productIdFinder: ProductIdFinder;
};

interface FindProductQueryHandlerResult {
  readonly result: ProductPrimitives;
}

export class FindProductIdQueryHandler
  implements QueryHandler<FindProductIdQuery, FindProductQueryHandlerResult>
{
  private readonly ProductIdFinder: ProductIdFinder;

  readonly queryType = FindProductIdQuery.name;

  constructor({ productIdFinder }: FindProductIdQueryHandlerProps) {
    this.ProductIdFinder = productIdFinder;
  }

  async execute(Query: FindProductIdQuery) {
    const { id } = Query.payload;

    const result = await this.ProductIdFinder.execute(id);
    return { result };
  }
}
