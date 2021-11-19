export interface ProductPrimitives {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly categories: string[];
  readonly description: string;
  readonly images: string[];
  readonly isCustom: boolean;
  readonly isInSale: boolean;
  readonly isLimited: boolean;
  readonly isOutOfStock: boolean;
  readonly materials: string[];
  readonly sizes: number[];
  readonly isActive: boolean;
  readonly deletedAt?: Date;
  readonly amount?: number;
}
