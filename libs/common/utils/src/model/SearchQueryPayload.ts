import { FilterPrimitive, NonMethodKeys, OrderTypes } from '@dinnosc/criteria';

export interface OrderPrimitive<T> {
  by: NonMethodKeys<T> | '';
  type: OrderTypes;
}

export interface SearchQueryPayload<T = unknown> {
  readonly filters: FilterPrimitive<T>[];
  readonly order: OrderPrimitive<T>;
  readonly limit?: number;
  readonly offset?: number;
}
