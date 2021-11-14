import { AwilixContainer, asClass, asFunction } from 'awilix';
import { materialRouting } from './material.routing';
import { MongoMaterialRepository } from '@frappe/material/persistence/mongodb';
import { MaterialCreator, MaterialNameFinder } from '@frappe/material/application';

export const registerMaterialModule = (container: AwilixContainer) => {
  container.register({
    materialRepository: asClass(MongoMaterialRepository).singleton(),
    materialCreator: asClass(MaterialCreator).singleton(),
    materialNameFinder: asClass(MaterialNameFinder).singleton(),
    materialRouting: asFunction(materialRouting).singleton()
  });
};
