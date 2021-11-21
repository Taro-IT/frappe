//User Story: Frappe-505
import { UserSearcher } from './UserSearcher';
import { QueryHandler, QueryResult } from '@tshio/query-bus';
import { SearchQueryResponse } from '@frappe/common/utils';
import { UserPrimitives } from '@frappe/account/domain';
import { SearchUsersQuery } from './SearchUsersQuery';

interface SearchUsersQueryHandlerDeps {
  readonly userSearcher: UserSearcher;
}

type SearchUsersQueryResponse = QueryResult<SearchQueryResponse<UserPrimitives>>;

export class SearchUsersQueryHandler implements QueryHandler<SearchUsersQuery, SearchUsersQueryResponse>{
  private readonly userSearcher: UserSearcher;

  readonly queryType = SearchUsersQuery.name;

  constructor({ userSearcher }: SearchUsersQueryHandlerDeps) {
    this.userSearcher = userSearcher;
  }

  async execute(query: SearchUsersQuery): Promise<SearchUsersQueryResponse> {
    const { filters, order, limit, offset } = query.payload;

    const { users: items, total } = await this.userSearcher.execute(filters, order, limit, offset);

    return { result: { items, total } }
  }
}
