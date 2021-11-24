//User story: frappe-89
import { CommandBus } from '@tshio/command-bus';
import { NextFunction, RequestHandler } from 'express';
import { CreatePaymentSessionCommand } from '@frappe/payment/application';

export const createPaymentSessionHandler =
  (commandBus: CommandBus): RequestHandler =>
  async (req, res, next: NextFunction) => {
    try {
      const session = await commandBus.execute(new CreatePaymentSessionCommand({ items: req.body.items }))
      res.status(201).json({ session })
    } catch (error) {
      console.log(error);
      next(error);
    }
  };