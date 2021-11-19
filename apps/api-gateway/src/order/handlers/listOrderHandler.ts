//User Story: frappe-91
import { RequestHandler } from 'express';
import { QueryBus } from '@tshio/query-bus';
import { ListOrderQuery } from '@frappe/order/application';

export const listOrderHandler =
  (queryBus: QueryBus): RequestHandler =>
  async (req, res) => {
    const orders = await queryBus.execute(new ListOrderQuery({}));

    res.status(200).json(orders);
  };
