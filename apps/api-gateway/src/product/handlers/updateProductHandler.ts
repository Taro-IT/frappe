//User story: frappe-59
import { CommandBus } from '@tshio/command-bus';
import { NextFunction, RequestHandler } from 'express';
import { UpdateProductCommand } from '@frappe/product/application';

export const updateProductHandler =
  (commandBus: CommandBus): RequestHandler =>
  async (req, res, next: NextFunction) => {
    try {

      await commandBus.execute(new UpdateProductCommand({
        id: req.params.id,
        ...req.body
      }));

      res.status(201).json({ id: req.params.id });
    } catch (error) {
      next(error);
    }
  };