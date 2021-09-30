import { QueryHandler } from "@tshio/query-bus";
import { ListCategoryQuery } from "./ListCategoryQuery";
import { CategoryLister } from "./CategoryLister";
import { CategoryPrimitives } from "@frappe/category/domain";

type Props = {
    readonly categoryLister: CategoryLister
}

interface ListCategoryQueryHandlerResult {
    readonly result: CategoryPrimitives[];
}

export class ListCategoryQueryHandler implements QueryHandler<ListCategoryQuery, ListCategoryQueryHandlerResult> {
    private readonly CategoryLister: CategoryLister;

    readonly QueryType = ListCategoryQuery.name;

    constructor({ categoryLister }: Props) {
        this.CategoryLister = categoryLister;
    }
    readonly queryType: string;

    async execute(Query: ListCategoryQuery) {

        const result = await this.CategoryLister.execute();
        return { result }
    }

}
