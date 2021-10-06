import { productPersistanceMongodb } from './product-persistance-mongodb';

describe('productPersistanceMongodb', () => {
  it('should work', () => {
    expect(productPersistanceMongodb()).toEqual('product-persistance-mongodb');
  });
});
