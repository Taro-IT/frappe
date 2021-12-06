// User Story: Frappe 62
import { RequestHandler } from 'express';
import { QueryBus } from '@tshio/query-bus';
import { FindUserQuery } from '@frappe/account/application';

export const findUserHandler =
  (queryBus: QueryBus): RequestHandler =>
  async (req, res) => {
    
  const user = await queryBus.execute(new FindUserQuery({ id: req.params.id }));

    res.status(200).json({ user });
  };
