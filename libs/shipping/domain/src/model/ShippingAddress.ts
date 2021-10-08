import {ShippingProvince} from "./ShippingProvince";
import {ShippingCity} from "./ShippingCity";
import {ShippingName} from "./ShippingName";
import {ShippingZip} from "./ShippingZip";
import {ShippingCountry} from "./ShippingCountry";
import {AddressLine} from "./AddressLine";
import {ShippingCompany} from "./ShippingCompany";
import {ShippingPhone} from "./ShippingPhone";
import {ShippingEmail} from "./ShippingEmail";
import {ShippingReference} from "./ShippingReference";

export class ShippingAddress {
  constructor(
    province: ShippingProvince,
    city: ShippingCity,
    name: ShippingName,
    zip: ShippingZip,
    country: ShippingCountry,
    address1: AddressLine,
    company: ShippingCompany,
    address2: AddressLine,
    phone: ShippingPhone,
    email: ShippingEmail,
    reference?: ShippingReference
  ) {
  }
}
