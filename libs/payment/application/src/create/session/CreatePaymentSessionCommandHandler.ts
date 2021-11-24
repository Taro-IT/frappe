// User Story: Frappe 89

import { CommandHandler } from '@tshio/command-bus';
import { CreatePaymentSessionCommand } from './CreatePaymentSessionCommand';
import { PaymentSessionCreator } from './PaymentSessionCreator';

type PaymentSessionProps = {
  readonly paymentSessionCreator: PaymentSessionCreator;
};

export class CreatePaymentSessionCommandHandler implements CommandHandler<CreatePaymentSessionCommand> {
  private readonly paymentSessionCreator: PaymentSessionCreator;

  readonly commandType = CreatePaymentSessionCommand.name;

  constructor({ paymentSessionCreator }: PaymentSessionProps) {
    this.paymentSessionCreator = paymentSessionCreator;
  }

  async execute(command: CreatePaymentSessionCommand) {
    const { items } = command.payload;

    return this.paymentSessionCreator.execute(items);
  }
}
