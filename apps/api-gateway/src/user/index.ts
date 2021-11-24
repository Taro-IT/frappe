import { asClass, asFunction, AwilixContainer } from 'awilix';

import { UserFinder, TokenAuthentication, PasswordResetCodeCreator, UserSearcher, UserUpdater } from '@frappe/account/application';
import { userRouting } from './user.routing';

export const registerUserModule = (container: AwilixContainer) => {
  container.register({
    userSearcher: asClass(UserSearcher).singleton(),
    passwordResetCodeCreator: asClass(PasswordResetCodeCreator).singleton(),
    userFinder: asClass(UserFinder).singleton(),
    userUpdater: asClass(UserUpdater).singleton(),
    tokenAuthentication: asClass(TokenAuthentication).singleton(),
    userRouting: asFunction(userRouting).singleton()
  })
}
