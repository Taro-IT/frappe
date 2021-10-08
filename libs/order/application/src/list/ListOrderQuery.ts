import { Query } from "@tshio/query-bus";


export class ListOrderQuery implements Query<Record<string, never>> {
    readonly type = ListOrderQuery.name;

    constructor(
        readonly payload: Record<string, never>
    ) { }
}
