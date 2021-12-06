import { RequestHandler } from 'express';
import { CommandBus } from '@tshio/command-bus';
import { UpdateUserCommand } from '@frappe/account/application';
import { wrapError } from '@frappe/common/utils';
import { Role } from '@frappe/account/domain';

export const updateUserHandler = (commandBus: CommandBus): RequestHandler =>
  async (req, res, next) => {
    const id = req.params.id;
    const name = req.body.name;
    const role = Role[req.body.role];

    const command = new UpdateUserCommand({ id, name, role });
    const [error] = await wrapError(commandBus.execute(command));

    if (error !== null) {
      next(error);
      return;
    }

    res.status(200).json({});
  }
