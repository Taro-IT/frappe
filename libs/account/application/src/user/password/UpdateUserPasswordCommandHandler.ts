import { CommandHandler } from '@tshio/command-bus';
import { UpdateUserPasswordCommand } from './UpdateUserPasswordCommand';
import { UserPasswordUpdater } from './UserPasswordUpdater';

interface UpdateUserPasswordCommandHandlerDeps {
  readonly userPasswordUpdater: UserPasswordUpdater;
}

export class UpdateUserPasswordCommandHandler implements CommandHandler<UpdateUserPasswordCommand> {
  private readonly userPasswordUpdater: UserPasswordUpdater;

  readonly commandType = UpdateUserPasswordCommand.name;

  constructor({ userPasswordUpdater }: UpdateUserPasswordCommandHandlerDeps) {
    this.userPasswordUpdater = userPasswordUpdater;
  }

  execute(command: UpdateUserPasswordCommand): Promise<void> {
    const { email, password } = command.payload;

    return this.userPasswordUpdater.execute(email, password);
  }

}
