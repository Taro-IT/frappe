/* // User Story: Frappe 501 */
import { RequestHandler } from 'express';
import { QueryBus } from '@tshio/query-bus';
import { ListMaterialQuery } from '@frappe/material/application';

export const listMaterialHandler =
  (queryBus: QueryBus): RequestHandler =>
  async (req, res) => {
    const materials = await queryBus.execute(new ListMaterialQuery({}));

    res.status(200).json(materials);
  };
