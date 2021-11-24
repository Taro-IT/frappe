//User Story: Frappe-510
import { CommandHandler } from '@tshio/command-bus';
import { UpdateUserCommand } from './UpdateUserCommand';
import { UserUpdater } from './UserUpdater';

interface UpdateUserCommandHandlerDeps {
  readonly userUpdater: UserUpdater;
}

export class UpdateUserCommandHandler implements CommandHandler<UpdateUserCommand> {
  private readonly userUpdater: UserUpdater;

  readonly commandType = UpdateUserCommand.name;

  constructor({ userUpdater }: UpdateUserCommandHandlerDeps) {
    this.userUpdater = userUpdater;
  }

  execute(command: UpdateUserCommand): Promise<void> {
    const { id, changes } = command.payload;

    return this.userUpdater.execute(id, changes);
  }

}
