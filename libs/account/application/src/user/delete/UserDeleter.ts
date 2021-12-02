/* User Story: Frappe 68 */

import {
  UserNotFound,
  UserRepository,
  UserPrimitives,
  UserId
} from '@frappe/account/domain';
import { UserFinder } from '../find';
import admin from 'firebase-admin';

interface Props {
  readonly userRepository: UserRepository;
  readonly userFinder: UserFinder;
}

export class UserDeleter {
  private readonly userFinder: UserFinder;
  private readonly userRepository: UserRepository;

  constructor({ userRepository, userFinder }: Props) {
    this.userRepository = userRepository;
    this.userFinder = userFinder;
  }

  async execute(id: string) {
    const user = await this.userExists(id);

    if (user === null) {
      throw new UserNotFound(id);
    }

    await admin.auth().deleteUser(id)

    return this.userRepository.delete(new UserId(id));
  }

  private async userExists(id: string) {
    try {
      const user = await this.userFinder.execute(id);
      return user as UserPrimitives;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
