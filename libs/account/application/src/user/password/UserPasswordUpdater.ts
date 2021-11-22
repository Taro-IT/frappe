import { UserSearcher } from '../search';
import { UserNotFound, UserPrimitives } from '@frappe/account/domain';
import { OrderTypes } from '@dinnosc/criteria';
import admin from 'firebase-admin';

interface UserPasswordUpdaterDeps {
  readonly userSearcher: UserSearcher;
  readonly firebaseAuth: admin.auth.Auth;
}

export class UserPasswordUpdater {
  private readonly userSearcher: UserSearcher;
  private readonly firebaseAuth: admin.auth.Auth;

  constructor({ userSearcher, firebaseAuth }: UserPasswordUpdaterDeps) {
    this.userSearcher = userSearcher;
    this.firebaseAuth = firebaseAuth;
  }

  async execute(email: string, password: string): Promise<void> {
    const user = await this.findUserByEmail(email);

    await this.firebaseAuth.updateUser(user.id, { password });
  }

  private async findUserByEmail(email: string): Promise<UserPrimitives> {
    const users = await this.userSearcher.execute([
      { field: 'email', operator: 'EQUAL', value: email }
    ], { by: '', type: OrderTypes.NONE });

    if (users.users.length !== 1) {
      throw new UserNotFound();
    }

    return users.users[0];
  }
}
