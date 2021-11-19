export interface ProductPrimitives {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly categories: string[];
  readonly description: string;
  readonly images: string[];
  readonly isCustom: boolean;
  readonly isLimited: boolean;
  readonly isOutOfStock: boolean;
  readonly customizableParts: string[];
  readonly sizes: number[];
  readonly isActive: boolean;
  readonly canBeSold: boolean;
  readonly isInSale?: boolean;
  readonly priceInSale?: number;
  readonly deletedAt?: Date;
  readonly amount?: number;
}
