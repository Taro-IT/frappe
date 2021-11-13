import { CommandHandler } from '@tshio/command-bus';

import { CreateMaterialCommand } from './CreateMaterialCommand';
import { MaterialCreator } from './MaterialCreator';

type MaterialProps = {
  readonly materialCreator: MaterialCreator;
};

export class CreateMaterialCommandHandler implements CommandHandler<CreateMaterialCommand> {
  private readonly materialCreator: MaterialCreator;

  readonly commandType = CreateMaterialCommand.name;

  constructor({ materialCreator }: MaterialProps) {
    this.materialCreator = materialCreator;
  }

  // El método execute llama al método execute del creator, con el payload que definiste en en command
  async execute(command: CreateMaterialCommand) {
    const { id, name, image } = command.payload;

    // Llamas al método execute del creator
    return this.materialCreator.execute(id, name, image);
  }
}
