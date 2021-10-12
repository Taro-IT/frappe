import { StringValue } from '@frappe/common/value-object';
import { read } from 'fs';

export class ShippingWeight {
  constructor(readonly value: number) {}
}
