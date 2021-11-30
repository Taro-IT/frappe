//User Story: Frappe-510
import admin from 'firebase-admin';
import { Role, User, UserRepository, UserUpdateError } from '@frappe/account/domain';
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

  async execute(id: string, name: string, role: Role): Promise<void> {

    const userPrimitives = await this.userFinder.execute(id);
    const changed = User.fromPrimitives({ ...userPrimitives, name, role });

    console.log("changed", changed)

    const updateRequest: admin.auth.UpdateRequest = { displayName: changed.name.value };
    const [error] = await wrapError(this.firebaseAuth.updateUser(id, updateRequest));

    if (error !== null) {
      throw new UserUpdateError(error.message);
    }

    return this.userRepository.save(changed);
  }
}
