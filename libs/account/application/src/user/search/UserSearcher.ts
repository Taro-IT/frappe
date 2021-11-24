//User Story: Frappe-505
import { User, UserPrimitives, UserRepository } from '@frappe/account/domain';
import { Criteria, FilterPrimitive, Limit, Offset, Order } from '@dinnosc/criteria';
import { OrderPrimitive } from '@frappe/common/utils';

interface UserSearcherDeps {
  readonly userRepository: UserRepository
}

export class UserSearcher {
  private readonly userRepository: UserRepository;

  constructor({ userRepository }: UserSearcherDeps) {
    this.userRepository = userRepository;
  }

  async execute(
    filters: FilterPrimitive<User>[],
    order: OrderPrimitive<User>,
    limit?: number,
    offset?: number
  ): Promise<{ users: UserPrimitives[]; total: number }> {
    const criteria = new Criteria<User>(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      { value: filters.map(({ value, operator, field }) => ({ value, operator, field })) },
      Order.fromValue(order.by, order.type),
      limit && new Limit(limit),
      offset && new Offset(offset)
    );

    const domainObjects = await this.userRepository.search(criteria);
    const users = domainObjects.map(user => user.toPrimitives());
    const total = await this.userRepository.total();

    return { users, total };
  }
}
