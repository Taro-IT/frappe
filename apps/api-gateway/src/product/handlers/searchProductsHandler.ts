import { QueryBus } from '@tshio/query-bus';
import { RequestHandler } from 'express';
import { SearchProductsQuery } from '@frappe/product/application';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const searchProductsHandler =
  (queryBus: QueryBus): RequestHandler =>
  async (req, res) => {
    const { filters, order, limit, offset } = req.query;
    console.log(req.query);
    
    const query = new SearchProductsQuery({
      filters: filters ? JSON.parse(filters as string) : [],
      order: JSON.parse(order as string),
      limit: limit !== undefined ? Number(limit as string) : undefined,
      offset: offset !== undefined ? Number(offset as string) : undefined
    });

    const response = await queryBus.execute(query);
    res.status(200).json(response);
  };
