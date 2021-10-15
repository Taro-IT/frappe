import { QueryHandler } from '@tshio/query-bus';
import { FindOrderQuery } from './FindOrderQuery';
import { OrderFinder } from './OrderFinder';
import { OrderPrimitives } from '@frappe/order/domain';

type Props = {
  readonly orderFinder: OrderFinder;
};

interface FindOrderQueryHandlerResult {
  readonly result: OrderPrimitives;
}

export class FindOrderQueryHandler implements QueryHandler<FindOrderQuery, FindOrderQueryHandlerResult> {
  private readonly OrderFinder: OrderFinder;

  readonly queryType = FindOrderQuery.name;

  constructor({ orderFinder }: Props) {
    this.OrderFinder = orderFinder;
  }

  async execute(Query: FindOrderQuery) {
    const { id } = Query.payload;

    const result = await this.OrderFinder.execute(id);
    return { result };
  }
}
