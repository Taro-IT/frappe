import {AwilixContainer, asClass, asFunction} from "awilix";
import {categoryRouting} from "./category.routing";
import {MongoCategoryRepository} from "@frappe/category/persistence/mongodb";
import {CategoryCreator} from "@frappe/category/application";

export const registerCollectionModule = (container: AwilixContainer) => {
  container.register({
    categoryRepository: asClass(MongoCategoryRepository).singleton(),
    categoryCreator: asClass(CategoryCreator).singleton(),
    categoryRouting: asFunction(categoryRouting).singleton()
  })
}