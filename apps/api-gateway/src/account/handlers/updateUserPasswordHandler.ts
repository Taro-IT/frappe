// User story: frappe-511
import { CommandBus } from '@tshio/command-bus';
import { RequestHandler } from 'express';
import { UpdatePasswordDto } from '../dto';
import { UpdateUserPasswordCommand } from '@frappe/account/application';

export const updateUserPasswordHandler = (commandBus: CommandBus): RequestHandler =>
  async (req, res) => {
    const { email, password } = req.body as UpdatePasswordDto;

    await commandBus.execute(new UpdateUserPasswordCommand({ email, password }));

    return res.status(200).json({})
  }
