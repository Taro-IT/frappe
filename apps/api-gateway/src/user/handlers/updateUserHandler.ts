import { RequestHandler } from 'express';
import { CommandBus } from '@tshio/command-bus';
import { UpdateUserCommand } from '@frappe/account/application';
import { wrapError } from '@frappe/common/utils';

export const updateUserHandler = (commandBus: CommandBus): RequestHandler =>
  async (req, res, next) => {
    const id = req.params.id;
    const name = req.params.name;
    const role = req.params.role;

    console.log(req.params)

    const command = new UpdateUserCommand({ id, name, role });
    const [error] = await wrapError(commandBus.execute(command));

    if (error !== null) {
      next(error);
      return;
    }

    res.status(200).json({});
  }
