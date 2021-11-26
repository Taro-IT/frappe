import { Query } from '@tshio/query-bus';

interface FindProductQueryPayload {
  readonly id: string;
}

export class FindProductQuery implements Query<FindProductQueryPayload> {
  readonly type = FindProductQuery.name;

  constructor(readonly payload: FindProductQueryPayload) {}
}
