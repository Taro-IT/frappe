import { AwilixContainer, asClass, asFunction } from 'awilix';
import { categoryRouting } from './category.routing';
import { MongoCategoryRepository } from '@frappe/category/persistence/mongodb';
import {
  CategoryCreator,
  CategoryLister,
  CategoryFinder,
  CategoryNameFinder,
  CategoryUpdater
} from '@frappe/category/application';

export const registerCollectionModule = (container: AwilixContainer) => {
  container.register({
    categoryRepository: asClass(MongoCategoryRepository).singleton(),
    categoryFinder: asClass(CategoryFinder).singleton(),
    categoryNameFinder: asClass(CategoryNameFinder).singleton(),
    categoryLister: asClass(CategoryLister).singleton(),
    categoryCreator: asClass(CategoryCreator).singleton(),
    categoryUpdater: asClass(CategoryUpdater).singleton(),
    categoryRouting: asFunction(categoryRouting).singleton()
  });
};
