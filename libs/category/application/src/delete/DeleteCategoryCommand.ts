import { Command } from '@tshio/command-bus';

interface DeleteCategoryCommandPayload {
  readonly id: string;
}

export class DeleteCategoryCommand implements Command<DeleteCategoryCommandPayload> {
  readonly type = DeleteCategoryCommand.name;

  constructor(readonly payload: DeleteCategoryCommandPayload) {}
}
