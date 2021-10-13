import {CommandHandler} from "@tshio/command-bus";
import {DeleteCategoryCommand} from "./DeleteCategoryCommand";
import {CategoryDeleter} from "./CategoryDeleter";

type Props = {
  readonly categoryDeleter: CategoryDeleter
}

export class DeleteCategoryCommandHandler implements CommandHandler<DeleteCategoryCommand> {
  private readonly categoryDeleter: CategoryDeleter;

  readonly commandType = DeleteCategoryCommand.name;

  constructor({ categoryDeleter }: Props) {
    this.categoryDeleter = categoryDeleter;
  }

  async execute(command: DeleteCategoryCommand) {
    const { id} = command.payload;
    
    return this.categoryDeleter.execute(id);
  }

}
