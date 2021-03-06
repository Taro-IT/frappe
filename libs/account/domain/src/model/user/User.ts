import { UserId } from './UserId';
import { UserEmail } from './UserEmail';
import { UserDisplayName } from './UserDisplayName';
import { UserPrimitives } from '../../utils';
import { UserRole } from './UserRole';

export class User {
  constructor(
    readonly id: UserId,
    readonly email: UserEmail,
    readonly name: UserDisplayName,
    readonly role: UserRole
  ) {}

  static fromPrimitives(primitives: UserPrimitives): User {
    return new User(new UserId(primitives.id), new UserEmail(primitives.email), new UserDisplayName(primitives.name), new UserRole(primitives.role));
  }

  toPrimitives(): UserPrimitives {
    return {
      id: this.id.value,
      email: this.email.value,
      name: this.name.value,
      role: this.role.value
    };
  }
}
