import { QueryHandler } from '@tshio/query-bus';
import { ListOrderQuery } from './ListOrderQuery';
import { OrderLister } from './OrderLister';
import { OrderPrimitives } from '@frappe/order/domain';

type Props = {
  readonly orderLister: OrderLister;
};

export interface ListOrderQueryHandlerResult {
  readonly result: OrderPrimitives[];
}

export class ListOrderQueryHandler implements QueryHandler<ListOrderQuery, ListOrderQueryHandlerResult> {
  private readonly orderLister: OrderLister;

  readonly queryType = ListOrderQuery.name;

  constructor({ orderLister }: Props) {
    this.orderLister = orderLister;
  }

  async execute() {
    const result = await this.orderLister.execute();
    return { result };
  }
}
