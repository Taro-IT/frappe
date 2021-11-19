import { CommandHandler } from '@tshio/command-bus';
import { UpdateCategoryCommand } from './UpdateCategoryCommand';
import { CategoryUpdater } from './CategoryUpdater';

type Props = {
  readonly categoryUpdater: CategoryUpdater;
};

export class UpdateCategoryCommandHandler implements CommandHandler<UpdateCategoryCommand> {
  private readonly categoryUpdater: CategoryUpdater;

  readonly commandType = UpdateCategoryCommand.name;

  constructor({ categoryUpdater }: Props) {
    this.categoryUpdater = categoryUpdater;
  }

  async execute(command: UpdateCategoryCommand) {
    const { id, name } = command.payload;

    return this.categoryUpdater.execute(id, name);
  }
}
