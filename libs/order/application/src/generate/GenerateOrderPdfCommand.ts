import { Command } from '@tshio/command-bus';

interface GenerateOrderPdfCommandPayload {
  readonly id: string;
}

export class GenerateOrderPdfCommand implements Command<GenerateOrderPdfCommandPayload> {
  readonly type = GenerateOrderPdfCommand.name;

  constructor(readonly payload: GenerateOrderPdfCommandPayload) {}
}
