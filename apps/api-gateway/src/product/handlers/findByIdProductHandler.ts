// User Story: Frappe 62
import { RequestHandler } from 'express';
import { QueryBus } from '@tshio/query-bus';
import { FindProductIdQuery } from '@frappe/product/application';

export const findByIdProductHandler =
  (queryBus: QueryBus): RequestHandler =>
  async (req, res) => {
    
   const product = await queryBus.execute(new FindProductIdQuery({ id: req.params.id }));

    res.status(200).json({ product });
  };
