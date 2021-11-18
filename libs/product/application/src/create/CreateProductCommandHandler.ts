// User Stories: Frappe 64, frappe-505

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
    const { 
      id,
      name,
      price,
      categories,
      description,
      images,
      isCustom,
      isInSale,
      isLimited,
      isOutOfStock,
      customizableParts,
      sizes,
      canBeSold,
      priceInSale,
      amount
    } = command.payload;

    return this.productCreator.execute(
      id,
      name,
      price,
      categories,
      description,
      images,
      isCustom, 
      isInSale,
      isLimited,
      isOutOfStock,
      customizableParts,
      sizes,
      canBeSold,
      priceInSale,
      amount
    );
  }
}
