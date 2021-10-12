import { Shipping } from '../model';

export interface ShippingRepository {
  save(shipping: Shipping): Promise<void>;
}
