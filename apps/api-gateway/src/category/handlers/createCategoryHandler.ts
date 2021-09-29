import {CommandBus} from "@tshio/command-bus";
import {NextFunction, RequestHandler} from "express";
import {CreateCategoryCommand} from "@frappe/category/application";
import {Uuid} from "@frappe/common/value-object";

export const createCategoryHandler = (commandBus: CommandBus): RequestHandler =>
  async (req, res, next: NextFunction) => {
    const id = Uuid.create().value;
    try {
      await commandBus.execute(new CreateCategoryCommand({ id, name: req.body.name}));
      res.status(201).json({ id });
      
    } catch (error) {
      next(error)
    }
    
  }
