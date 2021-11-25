// User Story: Frappe-58
import { ProductRepository, ProductNotFound } from '@frappe/product/domain';
import { ProductDeleter } from './ProductDeleter';
import { ProductFinder } from '../find/find-by-id';
import { mock, MockProxy, DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { ProductMother } from '@frappe/product/test';

describe('ProductDeleter', () => {
  let productRepository: MockProxy<ProductRepository>;
  let productFinder: DeepMockProxy<ProductFinder>;

  let deleter: ProductDeleter;

  beforeEach(() => {
    productRepository = mock<ProductRepository>();
    productFinder = mockDeep<ProductFinder>(new ProductFinder({ productRepository }));

    deleter = new ProductDeleter({ productRepository, productFinder });
  });

  it('should delete a Product', async () => {
    const when = new Date();
    const product = ProductMother.withDeletedDate(when);
    productRepository.find.mockResolvedValueOnce(product);
    await deleter.execute(product.id.value, when);

    expect(productRepository.save).toHaveBeenCalledWith(product);
  });

  it('should throw a ProductNotFound', async () => {
    const product = ProductMother.random();

    productRepository.find.mockRejectedValueOnce(ProductNotFound);
    const response = () => deleter.execute(product.id.value);

    await expect(async () => response()).rejects.toThrow(ProductNotFound);
  });
});