import { ShippingHeight } from './ShippingHeight';
import { ShippingWidth } from './ShippingWidth';
import { ShippingMassUnit } from './ShippingMassUnit';
import { ShippingDistanceUnit } from './ShippingDistanceUnit';
import { ShippingLength } from './ShippingLength';
import { ShippingContent } from './ShippingContent';
import { ShippingWeight } from './ShippingWeight';

export class ShippingParcel {
  constructor(
    readonly weight: ShippingWeight,
    readonly height: ShippingHeight,
    readonly width: ShippingWidth,
    readonly length: ShippingLength,
    readonly mass_unit: ShippingMassUnit,
    readonly distance_unit: ShippingDistanceUnit,
    readonly content: ShippingContent
  ) {}
}
