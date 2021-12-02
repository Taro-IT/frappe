import { Command } from '@tshio/command-bus';

interface DeleteUserCommandPayload {
  readonly id: string;
}

export class DeleteUserCommand implements Command<DeleteUserCommandPayload> {
  readonly type = DeleteUserCommand.name;

  constructor(readonly payload: DeleteUserCommandPayload) {}
}
