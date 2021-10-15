import { asClass, asFunction, AwilixContainer } from 'awilix';
import { MongoProductRepository } from '@frappe/product/persistance/mongodb';
import { ProductSearcher } from '@frappe/product/application';
import { productRouting } from './product.routing';

export const productModule = (container: AwilixContainer) => {
  container.register({
    productRepository: asClass(MongoProductRepository).singleton(),
    productSearcher: asClass(ProductSearcher).singleton(),
    productRouting: asFunction(productRouting)
  });
};
