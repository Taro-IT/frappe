import admin from 'firebase-admin';
import { wrapError } from '@frappe/common/utils';
import { AuthenticationFail, UserPrimitives } from '@frappe/account/domain';
import { UserFinder } from '@frappe/account/application';

interface TokenAuthenticationDeps {
  readonly firebaseAuth: admin.auth.Auth;
  readonly userFinder: UserFinder;
}

export class TokenAuthentication {
  private readonly firebaseAuth: admin.auth.Auth;
  private readonly userFinder: UserFinder;

  constructor({ firebaseAuth, userFinder }: TokenAuthenticationDeps) {
    this.firebaseAuth = firebaseAuth;
    this.userFinder = userFinder;
  }

  async execute(token: string): Promise<UserPrimitives> {
    const [error, user] = await wrapError(this.firebaseAuth.verifyIdToken(token));

    if (error !== null) {
      throw new AuthenticationFail(error.message);
    }

    return this.userFinder.execute(user.uid);
  }
}
