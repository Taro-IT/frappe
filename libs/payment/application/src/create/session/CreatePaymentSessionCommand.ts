// User Story: Frappe 89

import { Command } from '@tshio/command-bus';

interface CreatePaymentSessionCommandPayload {
  readonly items: {id: string, quantity: number} []
}

export class CreatePaymentSessionCommand implements Command<CreatePaymentSessionCommandPayload> {
  readonly type = CreatePaymentSessionCommand.name;

  constructor(readonly payload: CreatePaymentSessionCommandPayload) {}
}
