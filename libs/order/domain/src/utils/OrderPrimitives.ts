//User Stories: frappe-91, frappe-981
import { ShippingAddressPrimitives } from "@frappe/shipping/domain";

export enum OrderStatuses {
  ABIERTO = 'Abierta',
  EN_PROCESO = 'En proceso',
  LISTA_PARA_ENVIO = 'Lista para envío',
  ENTREGADA = 'Enviada',
  CANCELADA = 'Cancelada',
  ERRONEA = 'Orden Erronea',
  COMPLETADA = 'Completada'
}

export interface OrderItemCustomPartType {
  readonly section: string;
  readonly material: string;
}

export interface OrderItemType {
  readonly productId: string;
  readonly productName: string;
  readonly productPrice: number;
  readonly productImages: string[];
  readonly size: number;
  readonly quantity: number;
  readonly customParts?: OrderItemCustomPartType[];
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
  readonly clientName?: string;
  readonly pdfFile?: string;
}
