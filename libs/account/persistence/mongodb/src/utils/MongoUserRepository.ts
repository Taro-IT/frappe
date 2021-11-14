import { MongoRepository } from '@frappe/common/persistence/mongodb';
import { User, UserPrimitives, UserRepository } from '@frappe/account/domain';
import { Criteria } from '@dinnosc/criteria';

export class MongoUserRepository extends MongoRepository implements UserRepository {
  protected moduleName(): string {
    return 'users';
  }

  save(user: User): Promise<void> {
    return this.persist(user.id.value, user);
  }

  /**
   * Search database users that matches the provided criteria
   *
   * @param criteria Object that represents a Query
   */
  async search(criteria: Criteria<User>): Promise<User[]> {
    const users = await this.searchByCriteria(criteria);

    return users.map(user => User.fromPrimitives({ ...user, id: user._id } as UserPrimitives));
  }

  /**
   * Return the total collection record
   *
   */
  async total(): Promise<number> {
    const collection = await this.collection();

    return collection.countDocuments();
  }
}
