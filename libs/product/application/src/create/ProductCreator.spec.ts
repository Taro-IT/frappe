// User Stories: Frappe 64, frappe-505

import {ProductCreator} from './ProductCreator'
import {ProductAlreadyExists, ProductRepository} from '@frappe/product/domain'
import {ProductNameFinder} from '../find/find-by-name'
import {mock, MockProxy, DeepMockProxy, mockDeep} from 'jest-mock-extended'
import { ProductMother } from '@frappe/product/test'

describe('ProductCreator', () => {
  let productRepository: MockProxy<ProductRepository>;
  let productNameFinder: DeepMockProxy<ProductNameFinder>;

  let creator: ProductCreator;

  beforeEach(() => {
    productRepository = mock<ProductRepository>();
    productNameFinder = mockDeep<ProductNameFinder>(new ProductNameFinder({ productRepository }));

    creator = new ProductCreator({ productRepository, productNameFinder });
  });

  it('should create a new Product', async () => {
    const product = ProductMother.random();

    productRepository.findByName.mockRejectedValueOnce(ProductAlreadyExists);
    await creator.execute(
      product.id.value, 
      product.name.value, 
      product.price.value, 
      product.categories.value, 
      product.description.value, 
      product.images.value, 
      product.isCustom.value, 
      product.isInSale.value, 
      product.isLimited.value, 
      product.isOutOfStock.value, 
      product.customizableParts.value, 
      product.sizes.value,
      product.canBeSold.value,
      product.priceInSale.value,
      product.amount.value
    );

    expect(productRepository.save).toHaveBeenCalledWith(product);
  });

  it('should throw a ProductAlreadyExists error', async () => {
    const product = ProductMother.random();

    productRepository.findByName.mockResolvedValue(product);
    const response = async () => creator.execute(
      product.id.value, 
      product.name.value, 
      product.price.value, 
      product.categories.value, 
      product.description.value, 
      product.images.value, 
      product.isCustom.value, 
      product.isInSale.value, 
      product.isLimited.value,
      product.isOutOfStock.value, 
      product.customizableParts.value, 
      product.sizes.value,
      product.canBeSold.value,
      product.priceInSale.value,
      product.amount.value
    );

    expect(async () => response()).rejects.toThrow(ProductAlreadyExists);
  });
});