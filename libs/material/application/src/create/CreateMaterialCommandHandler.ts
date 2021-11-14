// User Story: Frappe 508

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

  async execute(command: CreateMaterialCommand) {
    const { id, name, image } = command.payload;

    return this.materialCreator.execute(id, name, image);
  }
}
