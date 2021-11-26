// User Story: Frappe-58
import { CommandBus } from '@tshio/command-bus';
import { NextFunction, RequestHandler } from 'express';
import { DeleteProductCommand } from '@frappe/product/application';

export const deleteProductHandler =
  (commandBus: CommandBus): RequestHandler =>
  async (req, res, next: NextFunction) => {
    const id = req.params.id;
    try {
      await commandBus.execute(new DeleteProductCommand({ id }));
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  };