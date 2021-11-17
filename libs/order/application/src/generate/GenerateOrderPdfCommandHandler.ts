//User Story: Frappe-85
import { CommandHandler } from '@tshio/command-bus';
import { GenerateOrderPdfCommand } from './GenerateOrderPdfCommand';
import { OrderPdfGenerator } from './OrderPdfGenerator';

type Props = {
  readonly orderPdfGenerator: OrderPdfGenerator;
};

export class GenerateOrderPdfCommandHandler implements CommandHandler<GenerateOrderPdfCommand> {
  private readonly orderPdfGenerator: OrderPdfGenerator;

  readonly commandType = GenerateOrderPdfCommand.name;

  constructor({ orderPdfGenerator }: Props) {
    this.orderPdfGenerator = orderPdfGenerator;
  }

  async execute(command: GenerateOrderPdfCommand) {
    const { id } = command.payload;

    return this.orderPdfGenerator.execute(id);
  }
}
