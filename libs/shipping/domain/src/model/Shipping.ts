import { ShippingId } from './ShippingId';
import { ShippingTrackingNumber } from './ShippingTrackingNumber';
import { ShippingAddress } from './ShippingAddress';
import { ShippingProvider } from './ShippingProvider';
import { ShippingParcel } from './ShippingParcel';

export class Shipping {
  constructor(
    readonly id: ShippingId,
    readonly tracking_number: ShippingTrackingNumber,
    readonly address_from: ShippingAddress,
    readonly address_to: ShippingAddress,
    readonly shipping_provider: ShippingProvider,
    readonly parcel: ShippingParcel
  ) {
    this.id = id;
    this.tracking_number = tracking_number;
    this.address_from = address_from;
    this.address_to = address_to;
    this.shipping_provider = shipping_provider;
    this.parcel = parcel;
  }
}
