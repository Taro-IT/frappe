// User story: frappe-503
import { CommandBus } from '@tshio/command-bus';
import { RequestHandler } from 'express';
import { CreatePasswordResetCodeDto } from '../dto';
import { CreatePasswordResetCodeCommand } from '@frappe/account/application';
import { wrapError } from '@frappe/common/utils';

export const createPasswordResetCodeHandler = (commandBus: CommandBus): RequestHandler =>
  async (req, res) => {
    const { email } = req.body as CreatePasswordResetCodeDto;

    const command = new CreatePasswordResetCodeCommand({ email });

    const [error] = await wrapError(commandBus.execute(command));

    console.log(error ?? error);
    res.status(200).json();
  }
