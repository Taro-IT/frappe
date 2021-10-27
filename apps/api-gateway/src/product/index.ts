import { AwilixContainer, asClass, asFunction } from 'awilix';
import { productRouting } from './product.routing';
import { MongoProductRepository } from '@frappe/product/persistance/mongodb';
import {
  ProductCreator,
  ProductNameFinder
} from '@frappe/product/application';


export const registerProductModule = (container: AwilixContainer) => {
  container.register({
    productRepository: asClass(MongoProductRepository).singleton(),
    productCreator: asClass(ProductCreator),
    productNameFinder: asClass(ProductNameFinder).singleton(),
    productRouting: asFunction(productRouting).singleton()

  });
};
