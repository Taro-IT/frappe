import admin, { FirebaseError } from 'firebase-admin';
import { wrapError } from '@frappe/common/utils';
import { EventDispatcher } from '@tshio/event-dispatcher';
import { EmailAlreadyExist, InvalidPasword, UserRegistered } from '@frappe/account/domain';

type AuthError = FirebaseError & Error;

interface AccountSignUpperDeps {
  readonly firebaseAuth: admin.auth.Auth;
  readonly eventBus: EventDispatcher;
}

export class AccountSignUpper {
  private readonly firebaseAuth: admin.auth.Auth;
  private readonly eventBus: EventDispatcher;

  constructor({ firebaseAuth, eventBus }: AccountSignUpperDeps) {
    this.firebaseAuth = firebaseAuth;
    this.eventBus = eventBus;
  }

  async execute(email: string, password: string, name = ''): Promise<void> {
    const [authError, user] = await wrapError<AuthError, admin.auth.UserRecord>(
      this.firebaseAuth.createUser({ email, password, displayName: name })
    );

    if (authError !== null) {
      this.throwAuthError(authError);
    }

    const { uid, displayName } = user;

    await this.eventBus.dispatch(new UserRegistered({ id: uid, name: displayName, email }));
  }

  private throwAuthError({ code, message }: AuthError) {
    switch (code) {
      case 'auth/email-already-exists':
        throw new EmailAlreadyExist(message);
      case 'auth/invalid-password':
        throw new InvalidPasword(message);
    }
  }
}
