// User Story: Frappe 67

import { Command } from '@tshio/command-bus';

interface UpdateMaterialCommandPayload {
  readonly id: string;
  readonly name?: string;
  readonly image?: string;
}

export class UpdateMaterialCommand implements Command<UpdateMaterialCommandPayload> {
  readonly type = UpdateMaterialCommand.name;

  constructor(readonly payload: UpdateMaterialCommandPayload) {}
}
