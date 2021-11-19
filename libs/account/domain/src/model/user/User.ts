import { UserId } from './UserId';
import { UserEmail } from './UserEmail';
import { UserDisplayName } from './UserDisplayName';
import { UserPrimitives } from '../../utils';

export class User {
  constructor(readonly id: UserId, readonly email: UserEmail, readonly name: UserDisplayName) {}

  static fromPrimitives(primitives: UserPrimitives): User {
    return new User(new UserId(primitives.id), new UserEmail(primitives.email), new UserDisplayName(primitives.name));
  }

  toPrimitives(): UserPrimitives {
    return {
      id: this.id.value,
      email: this.email.value,
      name: this.name.value
    };
  }
}
