import {QueryHandler} from "@tshio/query-bus";
import {FindCategoryQuery} from "./FindCategoryQuery";
import {CategoryFinder} from "./CategoryFinder";
import { CategoryPrimitives } from "@frappe/category/domain";

type Props = {
  readonly categoryNameFinder: CategoryFinder
}

interface FindCategoryQueryHandlerResult {
  readonly result: CategoryPrimitives;
}

export class FindCategoryQueryHandler implements QueryHandler<FindCategoryQuery, FindCategoryQueryHandlerResult> {
  private readonly CategoryNameFinder: CategoryFinder;

  readonly QueryType = FindCategoryQuery.name;

  constructor({ categoryNameFinder }: Props) {
    this.CategoryNameFinder = categoryNameFinder;
  }
  readonly queryType: string;

  async execute(Query: FindCategoryQuery) {
    const { id } = Query.payload;
    
    const result = await this.CategoryNameFinder.execute(id);
    return { result }
  }

}
