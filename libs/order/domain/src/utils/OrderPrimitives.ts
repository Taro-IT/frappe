export enum OrderStatuses {
  ABIERTO = 'ABIERTO',
  EN_PROCESO = 'EN_PROCESO',
  LISTO_PARA_ENVIO = 'LISTO_PARA_ENVIO',
  ATRASADO = 'ATRASADO'
}

export interface OrderItemType {
  readonly id: string;
  readonly productId: string;
  readonly productName: string;
  readonly productPrice: number;
  readonly quantity: number;
  readonly pdfFile?: string;
}

export interface OrderPrimitives {
  readonly id: string;
  readonly items: OrderItemType[];
  readonly subtotal: number;
  readonly total: number;
  readonly dateCreated: Date;
  readonly status: OrderStatuses;
}
