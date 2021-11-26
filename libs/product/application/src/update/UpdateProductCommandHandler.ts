// User Stories: Frappe 59

import { CommandHandler } from '@tshio/command-bus';
import { UpdateProductCommand } from './UpdateProductCommand';
import { ProductUpdater } from './ProductUpdater';

type ProductProps = {
  readonly productUpdater: ProductUpdater;
};

export class UpdateProductCommandHandler implements CommandHandler<UpdateProductCommand> {
  private readonly productUpdater: ProductUpdater;

  readonly commandType = UpdateProductCommand.name;

  constructor({ productUpdater }: ProductProps) {
    this.productUpdater = productUpdater;
  }

  async execute(command: UpdateProductCommand) {
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

    return this.productUpdater.execute(
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
