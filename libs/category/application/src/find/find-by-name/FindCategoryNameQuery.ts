import {Query} from "@tshio/Query-bus";

interface FindCategoryNameQueryPayload {
  readonly name: string;
}

export class FindCategoryNameQuery implements Query<FindCategoryNameQueryPayload> {
  readonly type = FindCategoryNameQuery.name;

  constructor(
    readonly payload: FindCategoryNameQueryPayload
  ) { }
}
