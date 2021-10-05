import {Command} from "@tshio/command-bus";

interface UpdateCategoryCommandPayload {
  readonly id: string;
  readonly name: string;
}

export class UpdateCategoryCommand implements Command<UpdateCategoryCommandPayload> {
  readonly type = UpdateCategoryCommand.name;

  constructor(
    readonly payload: UpdateCategoryCommandPayload
  ) { }
}
