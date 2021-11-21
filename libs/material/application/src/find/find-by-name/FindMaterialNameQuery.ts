import { Query } from '@tshio/query-bus';

interface FindMaterialNameQueryPayload {
  readonly name: string;
}

export class FindMaterialNameQuery implements Query<FindMaterialNameQueryPayload> {
  readonly type = FindMaterialNameQuery.name;

  constructor(readonly payload: FindMaterialNameQueryPayload) {}
}
