import { ShippingAddressPrimitives } from "@frappe/shipping/domain";

export enum OrderStatuses {
  ABIERTO = 'Abierto',
  EN_PROCESO = 'En proceso',
  LISTA_PARA_ENVIO = 'Lista para envío',
  ENTREGADA = 'Entregada'
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
  readonly isDelayed: boolean;
  readonly address?: ShippingAddressPrimitives;
  readonly clientName?: string
}
