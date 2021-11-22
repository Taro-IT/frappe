//User Story: frappe-507
import { CommandBus } from '@tshio/command-bus';
import { RequestHandler, NextFunction } from 'express';
import { UpdateOrderCommand } from '@frappe/order/application';

export const updateOrderHandler =
  (commandBus: CommandBus): RequestHandler =>
  async (req, res, next: NextFunction) => {
    try {
      const id = req.params.id;
      await commandBus.execute(new UpdateOrderCommand({ id, status: req.body.status }));
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  };
