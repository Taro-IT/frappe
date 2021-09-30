import {Query} from "@tshio/query-bus";

interface FindCategoryQueryPayload {
  readonly id: string;
}

export class FindCategoryQuery implements Query<FindCategoryQueryPayload> {
  readonly type = FindCategoryQuery.name;

  constructor(
    readonly payload: FindCategoryQueryPayload
  ) { }
}
