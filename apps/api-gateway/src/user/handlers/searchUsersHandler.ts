import { QueryBus } from '@tshio/query-bus';
import { RequestHandler } from 'express';
import { SearchUsersQuery } from '@frappe/account/application';

export const searchUsersHandler = (queryBus: QueryBus): RequestHandler =>
  async (req, res) => {
    const { filters, order, limit, offset } = req.query;

    const query = new SearchUsersQuery({
      filters: filters ? JSON.parse(filters as string) : [],
      order: JSON.parse(order as string),
      limit: limit && Number(limit as string),
      offset: offset && Number(offset as string)
    });

    const response = await queryBus.execute(query);

    res.status(200).json(response);
  }
