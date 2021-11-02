import { AwilixContainer, asClass, asFunction } from 'awilix';
import { productRouting } from './product.routing';
import { MongoProductRepository } from '@frappe/product/persistance/mongodb';
import {
  ProductCreator,
  ProductNameFinder,
  ProductSearcher
} from '@frappe/product/application';

export const registerProductModule = (container: AwilixContainer) => {
  container.register({
    productRepository: asClass(MongoProductRepository).singleton(),
    productCreator: asClass(ProductCreator),
    productNameFinder: asClass(ProductNameFinder).singleton(),
    productSearcher: asClass(ProductSearcher).singleton(),
    productRouting: asFunction(productRouting).singleton()
  });
};
