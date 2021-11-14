import { CommandHandler } from '@tshio/command-bus';
import { UpdateMaterialCommand } from './UpdateMaterialCommand';
import { MaterialUpdater } from './MaterialUpdater';

type Props = {
  readonly materialUpdater: MaterialUpdater;
};

export class UpdateMaterialCommandHandler implements CommandHandler<UpdateMaterialCommand> {
  private readonly materialUpdater: MaterialUpdater;

  readonly commandType = UpdateMaterialCommand.name;

  constructor({ materialUpdater }: Props) {
    this.materialUpdater = materialUpdater;
  }

  async execute(command: UpdateMaterialCommand) {
    const { id, name, image } = command.payload;

    return this.materialUpdater.execute(id, name, image);
  }
}
