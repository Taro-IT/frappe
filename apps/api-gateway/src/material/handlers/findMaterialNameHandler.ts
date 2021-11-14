import { RequestHandler } from 'express';
import { Uuid } from '@frappe/common/value-object';
import { QueryBus } from '@tshio/query-bus';
import { FindMaterialNameQuery } from '@frappe/material/application';

export const findMaterialNameHandler =
  (queryBus: QueryBus): RequestHandler =>
  async (req, res) => {
    const id = Uuid.create().value;

    await queryBus.execute(new FindMaterialNameQuery({ name: req.body.name }));

    res.status(200).json({ id });
  };
