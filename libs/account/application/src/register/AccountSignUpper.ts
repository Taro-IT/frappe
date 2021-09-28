import admin, { FirebaseError } from 'firebase-admin';
import {wrapError} from "@frappe/common/utils";
import {EventDispatcher} from "@tshio/event-dispatcher";
import {EmailAlreadyExist, InvalidPasword, UserRegistered} from "@frappe/account/domain";

export class AccountSignUpper {

  constructor(
    private readonly auth: admin.auth.Auth,
    private readonly eventBus: EventDispatcher
  ) { }

  async execute(email: string, password: string, name = ''): Promise<void> {
    const [authError, user] = await wrapError<FirebaseError, admin.auth.UserRecord>(this.auth.createUser({ email, password, displayName: name }));

    if (authError !== null) {
      this.throwAuthError(authError);
    }

    const { uid, displayName } = user;

    await this.eventBus.dispatch(new UserRegistered({ id: uid, name: displayName, email }));
  }

  private throwAuthError({ code, message }: FirebaseError) {
    switch (code) {
      case 'auth/email-already-exists':
        throw new EmailAlreadyExist(message);
      case 'auth/invalid-password':
        throw new InvalidPasword(message);
    }
  }
}
