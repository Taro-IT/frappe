import { Query } from "@tshio/query-bus";

interface ListCategoryQueryPayload {
}

export class ListCategoryQuery implements Query<ListCategoryQueryPayload> {
    readonly type = ListCategoryQuery.name;

    constructor(
        readonly payload: ListCategoryQueryPayload
    ) { }
}
