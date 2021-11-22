import { Command } from '@tshio/command-bus';

interface UpdateUserPasswordCommandPayload {
  readonly email: string;
  readonly password: string;
}

export class UpdateUserPasswordCommand implements Command<UpdateUserPasswordCommandPayload> {
  readonly type = UpdateUserPasswordCommand.name;

  constructor(readonly payload: UpdateUserPasswordCommandPayload) {}
}
