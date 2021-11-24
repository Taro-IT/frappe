//User Story: Frappe-510
import { UserPrimitives } from '@frappe/account/domain';
import { Command } from '@tshio/command-bus';

type UpdateUserCommandPayload = {
  readonly id: string;
  readonly changes: Partial<Pick<UserPrimitives, 'name'>>;
}

export class UpdateUserCommand implements Command<UpdateUserCommandPayload> {
  readonly type = UpdateUserCommand.name;

  constructor(readonly payload: UpdateUserCommandPayload) { }
}
