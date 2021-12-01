//User Story: Frappe-510
import { Command } from '@tshio/command-bus';

type UpdateUserCommandPayload = {
  readonly id: string;
  readonly name: string;
  readonly role: string;
}

export class UpdateUserCommand implements Command<UpdateUserCommandPayload> {
  readonly type = UpdateUserCommand.name;

  constructor(readonly payload: UpdateUserCommandPayload) { }
}
