import { Query } from '@tshio/query-bus';

interface FindMaterialQueryPayload {
  readonly id: string;
}

export class FindMaterialQuery implements Query<FindMaterialQueryPayload> {
  readonly type = FindMaterialQuery.name;

  constructor(readonly payload: FindMaterialQueryPayload) {}
}
