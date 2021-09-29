import {AwilixContainer, asClass, asFunction} from "awilix";
import {categoryRouting} from "./category.routing";
import {MongoCategoryRepository} from "@frappe/category/persistence/mongodb";
import {CategoryCreator} from "@frappe/category/application";
import { CategoryNameFinder } from "libs/category/application/src/find/find-by-name";

export const registerCollectionModule = (container: AwilixContainer) => {
  container.register({
    categoryRepository: asClass(MongoCategoryRepository).singleton(),
    categoryNameFinder: asClass(CategoryNameFinder).singleton(),
    categoryCreator: asClass(CategoryCreator).singleton(),
    categoryRouting: asFunction(categoryRouting).singleton()
  })
}
