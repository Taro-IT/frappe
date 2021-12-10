// User Story: Frappe 59

import { Command } from '@tshio/command-bus';

interface UpdateProductCommandPayload {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly price?: number;
  readonly categories?:string[];
  readonly images?:string[];
  readonly isCustom?: boolean;
  readonly isInSale?: boolean;
  readonly isOutOfStock?: boolean;
  readonly isLimited?: boolean;
  readonly customizableParts?: string[];
  readonly sizes?: number[];
  readonly canBeSold?: boolean;
  readonly priceInSale?: number;
  readonly amount?:number;
}

export class UpdateProductCommand implements Command<UpdateProductCommandPayload> {
  readonly type = UpdateProductCommand.name;

  constructor(readonly payload: UpdateProductCommandPayload) {}
}
