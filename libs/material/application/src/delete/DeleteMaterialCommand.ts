import { Command } from '@tshio/command-bus';

interface DeleteMaterialCommandPayload {
  readonly id: string;
}

export class DeleteMaterialCommand implements Command<DeleteMaterialCommandPayload> {
  readonly type = DeleteMaterialCommand.name;

  constructor(readonly payload: DeleteMaterialCommandPayload) {}
}
