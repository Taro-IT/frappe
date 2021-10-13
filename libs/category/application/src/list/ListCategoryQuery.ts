import { Query } from '@tshio/query-bus';

export class ListCategoryQuery implements Query<Record<string, never>> {
  readonly type = ListCategoryQuery.name;

  constructor(readonly payload: Record<string, never>) {}
}
