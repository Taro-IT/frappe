// User Stories: Frappe 64, frappe-505

import { Command } from '@tshio/command-bus';

interface CreateProductCommandPayload {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly categories:string[];
  readonly images:string[];
  readonly isCustom: boolean;
  readonly isInSale: boolean;
  readonly isOutOfStock: boolean;
  readonly isLimited: boolean;
  readonly customizableParts: string[];
  readonly sizes: number[];
  readonly canBeSold: boolean;
  readonly priceInSale: number;
  readonly amount:number;
}

export class CreateProductCommand implements Command<CreateProductCommandPayload> {
  readonly type = CreateProductCommand.name;

  constructor(readonly payload: CreateProductCommandPayload) {}
}
