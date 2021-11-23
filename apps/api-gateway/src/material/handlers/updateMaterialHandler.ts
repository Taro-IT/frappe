// User Story: Frappe 67

import { CommandBus } from '@tshio/command-bus';
import { RequestHandler, NextFunction } from 'express';
import { UpdateMaterialCommand } from '@frappe/material/application';

export const updateMaterialHandler =
  (commandBus: CommandBus): RequestHandler =>
  async (req, res, next: NextFunction) => {
    try {
      const id = req.params.id;
      await commandBus.execute(new UpdateMaterialCommand({ id, name: req.body.name, image: req.body.image }));
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  };
