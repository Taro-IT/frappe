import { Query } from '@tshio/query-bus';

interface FindProductNameQueryPayload {
  readonly name: string;
}

export class FindProductNameQuery implements Query<FindProductNameQueryPayload> {
  readonly type = FindProductNameQuery.name;

  constructor(readonly payload: FindProductNameQueryPayload) {}
}
