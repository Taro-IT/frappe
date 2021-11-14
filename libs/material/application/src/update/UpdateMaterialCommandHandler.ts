import { CommandHandler } from '@tshio/command-bus';
import { UpdateMaterialCommand } from './UpdateMaterialCommand';
import { MaterialUpdater } from './MaterialUpdater';

type Props = {
  readonly categoryUpdater: MaterialUpdater;
};

export class UpdateMaterialCommandHandler implements CommandHandler<UpdateMaterialCommand> {
  private readonly categoryUpdater: MaterialUpdater;

  readonly commandType = UpdateMaterialCommand.name;

  constructor({ categoryUpdater }: Props) {
    this.categoryUpdater = categoryUpdater;
  }

  async execute(command: UpdateMaterialCommand) {
    const { id, name, image } = command.payload;

    return this.categoryUpdater.execute(id, name, image);
  }
}
