import { CommandHandler } from '@tshio/command-bus';
import { CreateOrderCommand } from './CreateOrderCommand';
import { OrderCreator } from './OrderCreator';

type Props = {
  readonly orderCreator: OrderCreator;
};

export class CreateOrderCommandHandler implements CommandHandler<CreateOrderCommand> {
  private readonly orderCreator: OrderCreator;

  readonly commandType = CreateOrderCommand.name;

  constructor({ orderCreator }: Props) {
    this.orderCreator = orderCreator;
  }

  async execute(command: CreateOrderCommand) {
    const { id, items, subtotal, total, status, isDelayed,  /* clientName, address */} = command.payload;

    return this.orderCreator.execute(id, items, subtotal, total, status, isDelayed, /* clientName, address */);
  }
}
