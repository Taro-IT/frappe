import { asClass, asFunction, AwilixContainer } from 'awilix';
import { MongoUserRepository } from '@frappe/account/persistence/mongodb';
import { AccountSignUpper, UserCreator, UserPasswordUpdater } from '@frappe/account/application';
import { accountRouting } from './account.routing';

export const registerAccountModule = (container: AwilixContainer) => {
  container.register({
    userRepository: asClass(MongoUserRepository).singleton(),
    userCreator: asClass(UserCreator).singleton(),
    accountSignUpper: asClass(AccountSignUpper).singleton(),
    userPasswordUpdater: asClass(UserPasswordUpdater).singleton(),
    accountRouting: asFunction(accountRouting)
  });
};
