import { CommandHandler } from '@tshio/command-bus';
import { CreateProductCommand } from './CreateProductCommand';
import { ProductCreator } from './ProductCreator';

type ProductProps = {
  readonly productCreator: ProductCreator;
};

export class CreateProductCommandHandler implements CommandHandler<CreateProductCommand> {
  private readonly productCreator: ProductCreator;

  readonly commandType = CreateProductCommand.name;

  constructor({ productCreator }: ProductProps) {
    this.productCreator = productCreator;
  }

  async execute(command: CreateProductCommand) {
    const { id, name, price, amount, categories, description, images, isCustom, isInSale, isLimited, isOutOfStock, materials, sizes} = command.payload;

    return this.productCreator.execute(id, name, price, amount, categories, description, images, isCustom, isInSale, isLimited, isOutOfStock, materials, sizes);
  }
}
