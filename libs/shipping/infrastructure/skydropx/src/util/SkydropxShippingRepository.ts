import {
  InvalidShippingInstance,
  Shipping,
  ShippingAPIInternalError,
  ShippingAPIUnathenticated,
  ShippingRepository
} from '@frappe/shipping/domain';
import Axios, { AxiosInstance, AxiosError } from 'axios';
import { wrapError } from '@frappe/common/utils';

/** Skydropx Shipping Integration */
export class SkydropxShippingRepository implements ShippingRepository {
  private readonly http: AxiosInstance;

  /**
   * Create a Shipping Integration Providers
   *
   * Skydropx documentation {@link https://docs.skydropx.com/#skydropx-api}
   */
  constructor() {
    this.http = Axios.create({
      baseURL: 'https://api.skydropx.com/v1'
    });
    this.http.defaults.headers.common['Authorization'] = `Token token=${process.env.SKYDROPX_API_KEY}`;
  }

  /**
   * Saves a Shipping into Skydropx Platform
   *
   * @remarks This method is part of the {@link @frappe/shipping/infrastructure/skydropx}
   *
   * @param shipping - Domain Shipping Object
   *
   */
  async save(shipping: Shipping): Promise<void> {
    const [error] = await wrapError<AxiosError<unknown>, unknown>(
      this.http.post('/shipments', {
        address_from: {
          province: shipping.address_from.province.value,
          city: shipping.address_from.city.value,
          name: shipping.address_from.name.value,
          zip: shipping.address_from.zip.value,
          country: shipping.address_from.country.value,
          address1: shipping.address_from.address1.value,
          company: shipping.address_from.company?.value,
          address2: shipping.address_from.address2?.value,
          phone: shipping.address_from.phone.value,
          email: shipping.address_from.email.value
        },
        parcels: [
          {
            weight: shipping.parcel.weight.value,
            distance_unit: shipping.parcel.distance_unit.value,
            mass_unit: shipping.parcel.mass_unit.value,
            height: shipping.parcel.height.value,
            width: shipping.parcel.width.value,
            length: shipping.parcel.length.value
          }
        ],
        address_to: {
          province: shipping.address_to.province.value,
          city: shipping.address_to.city.value,
          name: shipping.address_to.name.value,
          zip: shipping.address_to.zip.value,
          country: shipping.address_to.country.value,
          address1: shipping.address_to.address1.value,
          company: shipping.address_to.company.value,
          address2: shipping.address_to.address2?.value,
          phone: shipping.address_to.phone.value,
          email: shipping.address_to.email.value,
          reference: shipping.address_to.reference?.value,
          contents: shipping.parcel.content.value
        }
      })
    );
    if (error !== null) {
      this.handleError(error);
    }
  }

  /**
   * This function handles errors from Skydropx and transform to DomainErrors
   *
   * @param error - Skydropx error handling
   */
  private handleError(error: AxiosError<unknown>) {
    switch (error.message) {
      case '400':
        throw new InvalidShippingInstance();
      case '401':
        throw new ShippingAPIUnathenticated();
      default:
        throw new ShippingAPIInternalError();
    }
  }
}
