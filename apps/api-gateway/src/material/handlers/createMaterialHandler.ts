import { CommandBus } from '@tshio/command-bus';
import { NextFunction, RequestHandler } from 'express';
import { CreateMaterialCommand } from '@frappe/material/application';
import { Uuid } from '@frappe/common/value-object';

export const createMaterialHandler =
  (commandBus: CommandBus): RequestHandler =>
  async (req, res, next: NextFunction) => {
    const id = Uuid.create().value;

    try {
      await commandBus.execute(new CreateMaterialCommand({ id, name: req.body.name, image: req.body.image }));

      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  };