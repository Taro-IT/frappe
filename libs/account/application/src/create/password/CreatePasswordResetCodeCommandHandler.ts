import { CommandHandler } from '@tshio/command-bus';
import { CreatePasswordResetCodeCommand } from './CreatePasswordResetCodeCommand';
import { PasswordResetCodeCreator } from './PasswordResetCodeCreator';

interface CreatePasswordResetCodeCommandHandlerDeps {
  readonly passwordResetCodeCreator: PasswordResetCodeCreator
}

export class CreatePasswordResetCodeCommandHandler implements CommandHandler<CreatePasswordResetCodeCommand> {
  private readonly passwordResetCodeCreator: PasswordResetCodeCreator;

  readonly commandType = CreatePasswordResetCodeCommand.name;

  constructor({ passwordResetCodeCreator }: CreatePasswordResetCodeCommandHandlerDeps) {
    this.passwordResetCodeCreator = passwordResetCodeCreator;
  }

  async execute(command: CreatePasswordResetCodeCommand): Promise<void> {
    const { email } = command.payload;
    this.passwordResetCodeCreator.execute(email);
  }
  
}
