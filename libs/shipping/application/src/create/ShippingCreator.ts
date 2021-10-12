import { Shipping, ShippingRepository } from '@frappe/shipping/domain';

interface ShippingCreatorDeps {
  readonly shippingRepository: ShippingRepository;
}

export class ShippingCreator {
  private readonly shippingRepository: ShippingRepository;

  constructor({ shippingRepository }: ShippingCreatorDeps) {
    this.shippingRepository = shippingRepository;
  }

  async execute(shipping: Shipping) {
    return this.shippingRepository.save(shipping);
  }
}
