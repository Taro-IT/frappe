import { Query } from '@tshio/query-bus';

interface FindUserQueryPayload {
  readonly id: string;
}

export class FindUserQuery implements Query<FindUserQueryPayload> {
  readonly type = FindUserQuery.name;

  constructor(readonly payload: FindUserQueryPayload) { }
}
