import { CommandBus } from '@tshio/command-bus';
import { RequestHandler } from 'express';
import { AccountSignUpDto } from '../dto';
import { AccountSignUpCommand } from '@frappe/account/application';

export const signUpHandler =
  (commandBus: CommandBus): RequestHandler =>
  async (req, res) => {
    const body = req.body as AccountSignUpDto;

    await commandBus.execute(new AccountSignUpCommand(body));

    res.status(200).json({});
  };
