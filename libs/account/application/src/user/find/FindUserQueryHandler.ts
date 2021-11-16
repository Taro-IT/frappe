import { UserFinder } from './UserFinder';
import { QueryHandler } from '@tshio/query-bus';
import { FindUserQuery } from './FindUserQuery';
import { UserPrimitives } from '@frappe/account/domain';

interface FindUserQueryHandlerDeps {
  readonly userFinder: UserFinder;
}

interface FindUserQueryHandlerResult {
  readonly result: UserPrimitives;
}

export class FindUserQueryHandler implements QueryHandler<FindUserQuery, FindUserQueryHandlerResult> {
  private readonly userFinder: UserFinder;

  readonly queryType = FindUserQuery.name;

  constructor({ userFinder }: FindUserQueryHandlerDeps) {
    this.userFinder = userFinder;
  }

  async execute(query: FindUserQuery): Promise<FindUserQueryHandlerResult> {
    const { id } = query.payload;

    const result = await this.userFinder.execute(id);

    return { result };
  }
}
