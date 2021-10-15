import { CommandBus } from '@tshio/command-bus';
import { RequestHandler, NextFunction } from 'express';
import { UpdateCategoryCommand } from '@frappe/category/application';

export const updateCategoryHandler =
  (commandBus: CommandBus): RequestHandler =>
  async (req, res, next: NextFunction) => {
    try {
      const id = req.params.id;
      await commandBus.execute(new UpdateCategoryCommand({ id, name: req.body.name }));
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  };
