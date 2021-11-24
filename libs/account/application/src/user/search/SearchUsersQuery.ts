//User Story: Frappe-505
import { SearchQueryPayload } from '@frappe/common/utils';
import { User } from '@frappe/account/domain';
import { Query } from '@tshio/query-bus';

type SearchUsersQueryPayload = SearchQueryPayload<User>;

export class SearchUsersQuery implements Query<SearchUsersQueryPayload> {
  readonly type = SearchUsersQuery.name;

  constructor(readonly payload: SearchUsersQueryPayload) { }
}
