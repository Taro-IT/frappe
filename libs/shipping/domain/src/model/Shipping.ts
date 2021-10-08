import {ShippingId} from "./ShippingId";
import {ShippingTrackingNumber} from "./ShippingTrackingNumber";
import {ShippingAddress} from "./ShippingAddress";
import {ShippingProvider} from "./ShippingProvider";
import {ShippingParcel} from "./ShippingParcel";

export class Shipping {
  readonly id: ShippingId;
  readonly tracking_number: ShippingTrackingNumber;
  readonly address_from: ShippingAddress;
  readonly address_to: ShippingAddress;
  readonly shipping_provider: ShippingProvider;
  readonly parcel: ShippingParcel;

  constructor(
    id: ShippingId,
    tracking_number: ShippingTrackingNumber,
    address_from: ShippingAddress,
    address_to: ShippingAddress,
    shipping_provider: ShippingProvider,
    parcel: ShippingParcel
  ) {
    this.id = id;
    this.tracking_number = tracking_number;
    this.address_from = address_from;
    this.address_to = address_to;
    this.shipping_provider = shipping_provider;
    this.parcel = parcel;
  }
}
