import { Query } from '@tshio/query-bus';

interface FindOrderQueryPayload {
  readonly id: string;
}

export class FindOrderQuery implements Query<FindOrderQueryPayload> {
  readonly type = FindOrderQuery.name;

  constructor(readonly payload: FindOrderQueryPayload) {}
}
