import {CommandBus} from "@tshio/command-bus";
import {NextFunction, RequestHandler} from "express";
import {DeleteCategoryCommand} from "@frappe/category/application";


export const deleteCategoryHandler = (commandBus: CommandBus): RequestHandler =>
  async (req, res, next: NextFunction) => {
    
    const id = req.params.id;
    try {
      await commandBus.execute(new DeleteCategoryCommand({id}));
      res.status(201).json({ id });
      
    } catch (error) {
      next(error)
    }
    
  }
