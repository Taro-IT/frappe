import {Shipping} from "@frappe/shipping/domain";

export class ShippingMother {

  static random(): Shipping {
    return new Shipping();
  }
}
