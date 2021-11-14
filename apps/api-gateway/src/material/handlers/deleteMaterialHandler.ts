import { CommandBus } from '@tshio/command-bus';
import { NextFunction, RequestHandler } from 'express';
import { DeleteMaterialCommand } from '@frappe/material/application';

export const deleteMaterialHandler =
  (commandBus: CommandBus): RequestHandler =>
  async (req, res, next: NextFunction) => {
    const id = req.params.id;
    try {
      await commandBus.execute(new DeleteMaterialCommand({ id }));
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  };
