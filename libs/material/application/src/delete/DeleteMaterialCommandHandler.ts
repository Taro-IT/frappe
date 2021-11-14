import { CommandHandler } from '@tshio/command-bus';
import { DeleteMaterialCommand } from './DeleteMaterialCommand';
import { MaterialDeleter } from './MaterialDeleter';

type Props = {
  readonly materialDeleter: MaterialDeleter;
};

export class DeleteMaterialCommandHandler implements CommandHandler<DeleteMaterialCommand> {
  private readonly materialDeleter: MaterialDeleter;

  readonly commandType = DeleteMaterialCommand.name;

  constructor({ materialDeleter }: Props) {
    this.materialDeleter = materialDeleter;
  }

  async execute(command: DeleteMaterialCommand) {
    const { id } = command.payload;

    return this.materialDeleter.execute(id);
  }
}
