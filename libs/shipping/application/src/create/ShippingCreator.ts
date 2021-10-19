import { Shipping, ShippingRepository } from '@frappe/shipping/domain';

interface ShippingCreatorDeps {
  readonly shippingRepository: ShippingRepository;
}

/** UseCase to creates a Shipping */
export class ShippingCreator {
  private readonly shippingRepository: ShippingRepository;

  /**
   * Creates a ShippingCreator Object
   *
   * @param shippingRepository - ShippingRepository contract from {@link @frappe/shipping/domain}
   */
  constructor({ shippingRepository }: ShippingCreatorDeps) {
    this.shippingRepository = shippingRepository;
  }

  /**
   * Delegates shipping creation to third-party integration with ShippingRepository contract
   *
   * @param shipping - Shipping Domain Object
   */
  async execute(shipping: Shipping): Promise<void> {
    return this.shippingRepository.save(shipping);
  }
}
