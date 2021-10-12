import { ShippingProvince } from './ShippingProvince';
import { ShippingCity } from './ShippingCity';
import { ShippingName } from './ShippingName';
import { ShippingZip } from './ShippingZip';
import { ShippingCountry } from './ShippingCountry';
import { AddressLine } from './AddressLine';
import { ShippingCompany } from './ShippingCompany';
import { ShippingPhone } from './ShippingPhone';
import { ShippingEmail } from './ShippingEmail';
import { ShippingReference } from './ShippingReference';

export class ShippingAddress {
  constructor(
    readonly province: ShippingProvince,
    readonly city: ShippingCity,
    readonly name: ShippingName,
    readonly zip: ShippingZip,
    readonly country: ShippingCountry,
    readonly address1: AddressLine,
    readonly company: ShippingCompany,
    readonly address2: AddressLine,
    readonly phone: ShippingPhone,
    readonly email: ShippingEmail,
    readonly reference?: ShippingReference
  ) {}
}
