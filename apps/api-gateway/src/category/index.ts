import {AwilixContainer, asClass, asFunction} from "awilix";
import {categoryRouting} from "./category.routing";
import {MongoCategoryRepository} from "@frappe/category/persistence/mongodb";
import {CategoryCreator, CategoryLister, CategoryNameFinder} from "@frappe/category/application";

export const registerCollectionModule = (container: AwilixContainer) => {
  container.register({
    categoryRepository: asClass(MongoCategoryRepository).singleton(),
    categoryNameFinder: asClass(CategoryNameFinder).singleton(),
    categoryLister: asClass(CategoryLister).singleton(),
    categoryCreator: asClass(CategoryCreator).singleton(),
    categoryRouting: asFunction(categoryRouting).singleton()
  })
}
