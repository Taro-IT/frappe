import { CommandBus } from '@tshio/command-bus';
import { NextFunction, RequestHandler } from 'express';
import { DeleteUserCommand } from '@frappe/account/application';

export const deleteUserHandler =
  (commandBus: CommandBus): RequestHandler =>
  async (req, res, next: NextFunction) => {
    const id = req.params.id;
    try {
      await commandBus.execute(new DeleteUserCommand({ id }));
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  };
