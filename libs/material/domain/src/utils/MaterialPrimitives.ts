export interface MaterialPrimitives {
  readonly id: string;
  readonly name: string;
  readonly image: string
  readonly isActive: boolean
  readonly deletedAt?: Date;
}