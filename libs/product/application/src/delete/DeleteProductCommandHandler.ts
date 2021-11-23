import { CommandHandler } from '@tshio/command-bus';
import { DeleteProductCommand } from './DeleteProductCommand';
import { ProductDeleter } from './ProductDeleter';

type Props = {
  readonly productDeleter: ProductDeleter;
};

export class DeleteProductCommandHandler implements CommandHandler<DeleteProductCommand> {
  private readonly productDeleter: ProductDeleter;

  readonly commandType = DeleteProductCommand.name;

  constructor({ productDeleter }: Props) {
    this.productDeleter = productDeleter;
  }

  async execute(command: DeleteProductCommand) {
    const { id } = command.payload;

    return this.productDeleter.execute(id);
  }
}
