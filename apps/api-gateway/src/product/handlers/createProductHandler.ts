//User story: frappe-64
import { CommandBus } from '@tshio/command-bus';
import { NextFunction, RequestHandler } from 'express';
import { CreateProductCommand } from '@frappe/product/application';
import { Uuid } from '@frappe/common/value-object';

export const createProductHandler =
  (commandBus: CommandBus): RequestHandler =>
  async (req, res, next: NextFunction) => {
    const id = Uuid.create().value;
    try {
      if(req.body.ammout === undefined || req.body.ammout === null){
        req.body.ammout = 1;
      }
      await commandBus.execute(new CreateProductCommand({
        id,
        ...req.body
      }));
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  };