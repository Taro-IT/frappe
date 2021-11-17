import admin from 'firebase-admin';
import { User, UserPrimitives, UserRepository, UserUpdateError } from '@frappe/account/domain';
import { UserFinder } from '../find';
import { wrapError } from '@frappe/common/utils';

interface UserUpdaterDeps {
  readonly firebaseAuth: admin.auth.Auth;
  readonly userFinder: UserFinder
  readonly userRepository: UserRepository;
}

export class UserUpdater {
  private firebaseAuth: admin.auth.Auth;
  private userRepository: UserRepository;
  private userFinder: UserFinder;

  constructor({ userRepository, firebaseAuth, userFinder }: UserUpdaterDeps) {
    this.userRepository = userRepository;
    this.firebaseAuth = firebaseAuth;
    this.userFinder = userFinder;
  }

  async execute(id: string, changes: Partial<Pick<UserPrimitives, 'name'>>): Promise<void> {
    if (Object.keys(changes).length === 0) {
      return;
    }

    const userPrimitives = await this.userFinder.execute(id);
    const changed = User.fromPrimitives({ ...userPrimitives, ...changes });

    const updateRequest: admin.auth.UpdateRequest = { displayName: changed.name.value };
    const [error] = await wrapError(this.firebaseAuth.updateUser(id, updateRequest));

    if (error !== null) {
      throw new UserUpdateError(error.message);
    }

    return this.userRepository.save(changed);
  }
}
