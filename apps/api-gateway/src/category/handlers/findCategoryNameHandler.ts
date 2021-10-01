import {RequestHandler} from "express";
import {Uuid} from "@frappe/common/value-object";
import { QueryBus } from "@tshio/query-bus";
import { FindCategoryNameQuery } from "@frappe/category/application";

export const findCategoryNameHandler = (queryBus: QueryBus): RequestHandler =>
  async (req, res) => {
    const id = Uuid.create().value;

    await queryBus.execute(new FindCategoryNameQuery({ name: req.body.name}));
    
    res.status(200).json({ id });
  }
