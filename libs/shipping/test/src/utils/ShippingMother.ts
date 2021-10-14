import {
  Shipping,
  ShippingProvince,
  ShippingCity,
  ShippingName,
  ShippingZip,
  ShippingCountry,
  AddressLine,
  ShippingCompany,
  ShippingPhone,
  ShippingEmail,
  ShippingReference,
  ShippingWeight,
  ShippingHeightm,
  ShippingWidth,
  ShippingLenght,
  ShippingMassUnit,
  ShippingDistanceUnit,
  ShippingContent,
  ShippingParcel,
  ShippingProvider,
  ShippingTrackingNumber,
  ShippingId,
  ShippingAddress
} from '@frappe/shipping/domain';
import { Uuid } from '@frappe/common/value-object';
import faker from 'faker';

/** Shipping utility to creates a Shipping Object */
export class ShippingMother {
  /**
   * Creates a random Shipping Object
   */
  static random(): Shipping {
    return new Shipping(
      new ShippingId(Uuid.create().value),
      new ShippingTrackingNumber(faker.lorem.word()),
      ShippingMother.randomAddress(),
      ShippingMother.randomAddress(),
      new ShippingProvider(faker.lorem.word()),
      new ShippingParcel(
        new ShippingWeight(faker.datatype.float()),
        new ShippingHeightm(faker.datatype.float()),
        new ShippingWidth(faker.datatype.float()),
        new ShippingLenght(faker.datatype.float()),
        new ShippingMassUnit('G'),
        new ShippingDistanceUnit('CM'),
        new ShippingContent(faker.lorem.word())
      )
    );
  }

  /**
   * Creates a random ShippingAddress Object
   */
  static randomAddress(): ShippingAddress {
    return new ShippingAddress(
      new ShippingProvince(faker.address.state()),
      new ShippingCity(faker.address.city()),
      new ShippingName(faker.name.firstName()),
      new ShippingZip(faker.address.zipCode()),
      new ShippingCountry(faker.address.country()),
      new AddressLine(faker.address.streetAddress()),
      new ShippingCompany(faker.company.companyName()),
      new AddressLine(faker.address.secondaryAddress()),
      new ShippingPhone(faker.phone.phoneNumber()),
      new ShippingEmail(faker.internet.email()),
      new ShippingReference(faker.lorem.word())
    );
  }
}
