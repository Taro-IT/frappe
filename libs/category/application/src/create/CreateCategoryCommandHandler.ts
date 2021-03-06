import { CommandHandler } from '@tshio/command-bus';
import { CreateCategoryCommand } from './CreateCategoryCommand';
import { CategoryCreator } from './CategoryCreator';

type CategoryProps = {
  readonly categoryCreator: CategoryCreator;
};

export class CreateCategoryCommandHandler implements CommandHandler<CreateCategoryCommand> {
  private readonly categoryCreator: CategoryCreator;

  readonly commandType = CreateCategoryCommand.name;

  constructor({ categoryCreator }: CategoryProps) {
    this.categoryCreator = categoryCreator;
  }

  async execute(command: CreateCategoryCommand) {
    const { id, name } = command.payload;

    return this.categoryCreator.execute(id, name);
  }
}
