import { CommandHandler } from '@tshio/command-bus';
import { DeleteMaterialCommand } from './DeleteMaterialCommand';
import { MaterialDeleter } from './MaterialDeleter';

type Props = {
  readonly categoryDeleter: MaterialDeleter;
};

export class DeleteMaterialCommandHandler implements CommandHandler<DeleteMaterialCommand> {
  private readonly categoryDeleter: MaterialDeleter;

  readonly commandType = DeleteMaterialCommand.name;

  constructor({ categoryDeleter }: Props) {
    this.categoryDeleter = categoryDeleter;
  }

  async execute(command: DeleteMaterialCommand) {
    const { id } = command.payload;

    return this.categoryDeleter.execute(id);
  }
}
