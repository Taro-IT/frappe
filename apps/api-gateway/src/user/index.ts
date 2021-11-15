import { asClass, asFunction, AwilixContainer } from 'awilix';
import { PasswordResetCodeCreator, UserSearcher } from '@frappe/account/application';
import { userRouting } from './user.routing';

export const registerUserModule = (container: AwilixContainer) => {
  container.register({
    userSearcher: asClass(UserSearcher).singleton(),
    passwordResetCodeCreator: asClass(PasswordResetCodeCreator).singleton(),
    userRouting: asFunction(userRouting).singleton()
  })
}
