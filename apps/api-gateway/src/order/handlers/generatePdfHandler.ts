import { CommandBus } from '@tshio/command-bus';
import { RequestHandler, NextFunction, Request, Response } from 'express';
import { GenerateOrderPdfCommand } from '@frappe/order/application';

export const generatePdfHandler =
  (commandBus: CommandBus): RequestHandler =>
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    try {
      const fileName = await commandBus.execute(new GenerateOrderPdfCommand({ id }));
      res.status(201).json({ url: fileName })

    } catch (error) {
      next(error);
    }
  };
