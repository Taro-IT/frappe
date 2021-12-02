import { CommandHandler } from '@tshio/command-bus';
import { CreateUserCommand } from './CreateUserCommand';
import { UserCreator } from './UserCreator';

interface CreateUserCommandHandlerDeps {
  readonly userCreator: UserCreator;
}

export class CreateUserCommandHandler implements CommandHandler<CreateUserCommand> {
  private readonly userCreator: UserCreator;

  readonly commandType = CreateUserCommand.name;

  constructor({ userCreator }: CreateUserCommandHandlerDeps) {
    this.userCreator = userCreator;
  }

  async execute(command: CreateUserCommand): Promise<void> {
    const { name, id, email, role } = command.payload;

    return this.userCreator.execute(id, email, role, name);
  }
}
