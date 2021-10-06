import {RequestHandler} from "express";
import { QueryBus } from "@tshio/query-bus";

export const listOrderHandler = (queryBus: QueryBus): RequestHandler =>
  async (req, res) => {
  /*   const categories = await queryBus.execute(new ListOrderQuery({}));
    
    res.status(200).sendFile() */
  }
