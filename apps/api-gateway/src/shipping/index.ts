import {asClass, AwilixContainer} from "awilix";
import {ShippingCreator} from "@frappe/shipping/application";
import {SkydropxShippingRepository} from "@frappe/shipping/infrastructure/skydropx";

export const registerShippingModule = (container: AwilixContainer) => {
  container.register({
    // TODO Fix with SKYDROPX_API_KEY
    shippingRepository: asClass(SkydropxShippingRepository).singleton(),
    shippingCreator: asClass(ShippingCreator).singleton()
  })
}
