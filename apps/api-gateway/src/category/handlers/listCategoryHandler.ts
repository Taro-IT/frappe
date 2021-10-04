import {RequestHandler} from "express";
import { QueryBus } from "@tshio/query-bus";
import { ListCategoryQuery } from "@frappe/category/application";

export const listCategoryHandler = (queryBus: QueryBus): RequestHandler =>
  async (req, res) => {
    const categories = await queryBus.execute(new ListCategoryQuery({}));
    
    res.status(200).json(categories);
  }
