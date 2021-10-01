import { Query } from "@tshio/query-bus";


export class ListCategoryQuery implements Query<{}> {
    readonly type = ListCategoryQuery.name;

    constructor(
        readonly payload: {}
    ) { }
}
