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
import { ShippingAddressPrimitives } from '..';

export class ShippingAddress {
  constructor(
    readonly province: ShippingProvince,
    readonly city: ShippingCity,
    readonly name: ShippingName,
    readonly zip: ShippingZip,
    readonly country: ShippingCountry,
    readonly address1: AddressLine,
    readonly phone: ShippingPhone,
    readonly email: ShippingEmail,
    readonly company?: ShippingCompany,
    readonly address2?: AddressLine,
    readonly reference?: ShippingReference
  ) {}

  static fromPrimitives(primitives: ShippingAddressPrimitives): ShippingAddress {

    return new ShippingAddress(
      new ShippingProvince(primitives.province),
      new ShippingCity(primitives.city),
      new ShippingName(primitives.name),
      new ShippingZip(primitives.zip),
      new ShippingCountry(primitives.country),
      new AddressLine(primitives.address1),
      new ShippingPhone(primitives.phone),
      new ShippingEmail(primitives.email),
      new ShippingCompany(primitives.company),
      new AddressLine(primitives.address2),
      new ShippingReference(primitives.reference),
    )
  }

  toPrimitives(): ShippingAddressPrimitives {
    return {
      province: this.province.value,
      city: this.city.value,
      name: this.name.value,
      zip: this.zip.value,
      country: this.country.value,
      address1: this.address1.value,
      phone: this.phone.value,
      email: this.email.value,
      company: this.company.value,
      address2: this.address2.value,
      reference: this.reference.value
    }
  }
}
