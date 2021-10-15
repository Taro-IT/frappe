import { Command } from '@tshio/command-bus';

interface CreateProductCommandPayload {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly amount:number;
  readonly price: number;
  readonly categories:string[];
  readonly images:string[];
  readonly isCustom: boolean;
  readonly isInSale: boolean;
  readonly isOutOfStock: boolean;
  readonly isLimited: boolean;
  readonly materials: string;
  readonly sizes: string[];
}

export class CreateProductCommand implements Command<CreateProductCommandPayload> {
  readonly type = CreateProductCommand.name;

  constructor(readonly payload: CreateProductCommandPayload) {}
}
