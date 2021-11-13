import { Command } from '@tshio/command-bus';

interface CreateMaterialCommandPayload {
  readonly id: string;
  readonly name: string;
  readonly image: string;
}

export class CreateMaterialCommand implements Command<CreateMaterialCommandPayload> {
  readonly type = CreateMaterialCommand.name;

  constructor(readonly payload: CreateMaterialCommandPayload) {}
}
