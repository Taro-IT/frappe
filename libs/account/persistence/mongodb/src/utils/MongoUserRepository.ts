import { MongoRepository } from '@frappe/common/persistence/mongodb';
import { User, UserRepository } from '@frappe/account/domain';

export class MongoUserRepository extends MongoRepository implements UserRepository {
  protected moduleName(): string {
    return 'users';
  }

  save(user: User): Promise<void> {
    return this.persist(user.id.value, user);
  }
}
