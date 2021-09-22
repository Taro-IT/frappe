import {Command} from "@tshio/command-bus";

interface CreateCategoryCommandPayload {
  readonly name: string;
}

export class CreateCategoryCommand implements Command<CreateCategoryCommandPayload> {
  readonly type = CreateCategoryCommand.name;

  constructor(
    readonly payload: CreateCategoryCommandPayload
  ) { }
}
