import { Role, User, UserDisplayName, UserEmail, UserId, UserRole } from '@frappe/account/domain';
import { StringMother, UuidMother } from '@frappe/common/test';

export class UserMother {
  static random(): User {
    return new User(
      new UserId(UuidMother.random()),
      new UserEmail(StringMother.email()),
      new UserDisplayName(StringMother.randomWord()),
      new UserRole(Role.ADMIN)
    );
  }
}
