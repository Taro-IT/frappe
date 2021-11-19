import { EventDispatcher } from '@tshio/event-dispatcher';
import { UserSearcher } from '../../user';
import { OrderTypes } from '@dinnosc/criteria';
import admin from 'firebase-admin';
import { PasswordResetCodeCreated, UserNotFound, UserPrimitives } from '@frappe/account/domain';

interface PasswordResetterLinkCreatorDeps {
  readonly firebaseAuth: admin.auth.Auth;
  readonly eventBus: EventDispatcher;
  readonly userSearcher: UserSearcher;
}

export class PasswordResetCodeCreator {
  private readonly firebaseAuth: admin.auth.Auth;
  private readonly eventBus: EventDispatcher;
  private readonly userSearcher: UserSearcher;

  constructor({ firebaseAuth, eventBus, userSearcher }: PasswordResetterLinkCreatorDeps) {
    this.firebaseAuth = firebaseAuth;
    this.eventBus = eventBus;
    this.userSearcher = userSearcher;
  }

  async execute(email: string): Promise<void> {
    const user = await this.searchUserByEmail(email);

    const link = await this.firebaseAuth.generateEmailVerificationLink(user.email);
    const params = new URLSearchParams(link.split('?')[1]);
    const code = params.get('oobCode');
    
    const event = new PasswordResetCodeCreated({ email, code });

    this.eventBus.dispatch(event);
  }

  private async searchUserByEmail(email: string): Promise<UserPrimitives> {
    const { users } = await this.userSearcher.execute(
      [{ field: 'email', operator: 'EQUAL', value: email }],
      { by: '', type: OrderTypes.NONE }, 1
    );

    if (users.length !== 1) {
      throw new UserNotFound();
    }

    return users[0];
  }
}
