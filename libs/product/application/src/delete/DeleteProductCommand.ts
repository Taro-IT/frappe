import { Command } from '@tshio/command-bus';

interface DeleteProductCommandPayload {
  readonly id: string;
}

export class DeleteProductCommand implements Command<DeleteProductCommandPayload> {
  readonly type = DeleteProductCommand.name;

  constructor(readonly payload: DeleteProductCommandPayload) {}
}
