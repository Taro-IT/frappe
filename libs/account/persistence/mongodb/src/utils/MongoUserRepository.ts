import { MongoRepository } from '@frappe/common/persistence/mongodb';
import { Criteria } from '@dinnosc/criteria';
import { User, UserId, UserPrimitives, UserRepository } from '@frappe/account/domain';
import { Nullable } from '@frappe/common/utils';

export class MongoUserRepository extends MongoRepository implements UserRepository {
  protected moduleName(): string {
    return 'users';
  }

  save(user: User): Promise<void> {
    return this.persist(user.id.value, user);
  }

  /**
   * Finds a user @see {@link User}
   * @param id - The id of the user you want to find
   *
   * @returns the found user or null if it does not exist
   */
  async find(id: UserId): Promise<Nullable<User>> {
    const collection = await this.collection();
    const document = await collection.findOne({ _id: id.value });

    if (!document) {
      return null;
    }

    return User.fromPrimitives({ ...document, id: document._id } as UserPrimitives);
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
