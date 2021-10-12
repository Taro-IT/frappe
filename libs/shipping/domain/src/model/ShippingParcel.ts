import { ShippingHeightm } from './ShippingHeightm';
import { ShippingWidth } from './ShippingWidth';
import { ShippingMassUnit } from './ShippingMassUnit';
import { ShippingDistanceUnit } from './ShippingDistanceUnit';
import { ShippingLenght } from './ShippingLenght';
import { ShippingContent } from './ShippingContent';
import { ShippingWeight } from './ShippingWeight';

export class ShippingParcel {
  constructor(
    readonly weight: ShippingWeight,
    readonly height: ShippingHeightm,
    readonly width: ShippingWidth,
    readonly lenght: ShippingLenght,
    readonly mass_unit: ShippingMassUnit,
    readonly distance_unit: ShippingDistanceUnit,
    readonly content: ShippingContent
  ) {}
}
