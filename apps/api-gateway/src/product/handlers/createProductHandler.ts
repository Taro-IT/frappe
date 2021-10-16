import { CommandBus } from '@tshio/command-bus';
import { NextFunction, RequestHandler } from 'express';
import { CreateProductCommand } from '@frappe/product/application';
import { Uuid } from '@frappe/common/value-object';

export const createProductHandler =
  (commandBus: CommandBus): RequestHandler =>
  async (req, res, next: NextFunction) => {
    const id = Uuid.create().value;
    try {
      await commandBus.execute(new CreateProductCommand({
        id,
        name: req.body.name,
        price: req.body.price,
        categories: req.body.categories,
        description:req.body.description,
        images: req.body.images,
        isCustom: req.body.isCustom,
        isInSale: req.body.isInSale,
        isLimited: req.body.isLimited,
        isOutOfStock: req.body.isOutOfStock,
        materials: req.body.materials,
        sizes: req.body.sizes,
        amount:req.body.amount
      }));
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  };