import {ShippingHeightm} from "./ShippingHeightm";
import {ShippingWidth} from "./ShippingWidth";
import {ShippingMassUnit} from "./ShippingMassUnit";
import {ShippingDistanceUnit} from "./ShippingDistanceUnit";
import {ShippingLenght} from "./ShippingLenght";
import {ShippingContent} from "./ShippingContent";

export class ShippingParcel {
  constructor(
    height: ShippingHeightm,
    width: ShippingWidth,
    lenght: ShippingLenght,
    mass_unit: ShippingMassUnit,
    distance_unit: ShippingDistanceUnit,
    content: ShippingContent
  ) {
  }
}
