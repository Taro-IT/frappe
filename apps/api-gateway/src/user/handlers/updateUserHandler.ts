import { RequestHandler } from 'express';
import { CommandBus } from '@tshio/command-bus';
import { UpdateUserDto } from '../dto';
import { UpdateUserCommand } from '@frappe/account/application';
import { wrapError } from '@frappe/common/utils';

export const updateUserHandler = (commandBus: CommandBus): RequestHandler =>
  async (req, res, next) => {
    const id = req.params.id;
    const changes = req.body as UpdateUserDto;

    const command = new UpdateUserCommand({ id, changes });
    const [error] = await wrapError(commandBus.execute(command));

    if (error !== null) {
      next(error);
      return;
    }

    res.status(200).json({});
  }
