//User story: frappe-507
import { CommandHandler } from '@tshio/command-bus';
import { UpdateOrderCommand } from './UpdateOrderCommand';
import { OrderUpdater } from './OrderUpdater';

type Props = {
  readonly orderUpdater: OrderUpdater;
};

export class UpdateOrderCommandHandler implements CommandHandler<UpdateOrderCommand> {
  private readonly orderUpdater: OrderUpdater;

  readonly commandType = UpdateOrderCommand.name;

  constructor({ orderUpdater }: Props) {
    this.orderUpdater = orderUpdater;
  }

  async execute(command: UpdateOrderCommand) {
    const { id, status } = command.payload;

    return this.orderUpdater.execute(id, status);
  }
}