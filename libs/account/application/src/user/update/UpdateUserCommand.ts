//User Story: Frappe-510
import { Role } from '@frappe/account/domain';
import { Command } from '@tshio/command-bus';

type UpdateUserCommandPayload = {
  readonly id: string;
  readonly name: string;
  readonly role: Role;
}

export class UpdateUserCommand implements Command<UpdateUserCommandPayload> {
  readonly type = UpdateUserCommand.name;

  constructor(readonly payload: UpdateUserCommandPayload) { }
}
