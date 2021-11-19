import { asClass, asFunction, AwilixContainer } from 'awilix';
import { UserFinder, UserSearcher, UserUpdater } from '@frappe/account/application';
import { userRouting } from './user.routing';

export const registerUserModule = (container: AwilixContainer) => {
  container.register({
    userSearcher: asClass(UserSearcher).singleton(),
    userFinder: asClass(UserFinder).singleton(),
    userUpdater: asClass(UserUpdater).singleton(),
    userRouting: asFunction(userRouting).singleton()
  })
}
