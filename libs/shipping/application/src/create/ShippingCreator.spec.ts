import { ShippingCreator } from './ShippingCreator';
import { ShippingRepository } from '@frappe/shipping/domain';
import { mock, MockProxy } from 'jest-mock-extended';
import { ShippingMother } from '@frappe/shipping/test';

//TO DO Add integration testing
describe('ShippingCreator', () => {
  let shippingRepository: MockProxy<ShippingRepository>;
  let service: ShippingCreator;

  beforeEach(() => {
    shippingRepository = mock<ShippingRepository>();

    service = new ShippingCreator({ shippingRepository });
  });

  it('should creates a ShippingOrder', async () => {
    const shipping = ShippingMother.random();

    await service.execute(shipping);

    expect(shippingRepository.save).toHaveBeenCalledWith(shipping);
  });
});
