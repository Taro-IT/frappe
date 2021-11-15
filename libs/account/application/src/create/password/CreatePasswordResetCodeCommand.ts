import { Command } from '@tshio/command-bus';

interface CreatePasswordResetCodeCommandPayload {
  readonly email: string;
}

export class CreatePasswordResetCodeCommand implements Command<CreatePasswordResetCodeCommandPayload> {
  readonly type = CreatePasswordResetCodeCommand.name;

  constructor(readonly payload: CreatePasswordResetCodeCommandPayload) { }
}
