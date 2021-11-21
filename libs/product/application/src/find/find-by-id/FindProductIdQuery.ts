//User story: Frappe-62
import { Query } from '@tshio/query-bus';

interface FindProductIdQueryPayload {
  readonly id: string;
}

export class FindProductIdQuery implements Query<FindProductIdQueryPayload> {
  readonly type = FindProductIdQuery.name;

  constructor(readonly payload: FindProductIdQueryPayload) {}
}
