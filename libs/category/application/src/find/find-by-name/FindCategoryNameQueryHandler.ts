import {QueryHandler} from "@tshio/Query-bus";
import {FindCategoryNameQuery} from "./FindCategoryNameQuery";
import {CategoryNameFinder} from "./CategoryNameFinder";
import { CategoryPrimitives } from "@frappe/category/domain";

type Props = {
  readonly categoryNameFinder: CategoryNameFinder
}

interface FindCategoryQueryHandlerResult {
  readonly result: CategoryPrimitives;
}

export class FindCategoryNameQueryHandler implements QueryHandler<FindCategoryNameQuery, FindCategoryQueryHandlerResult> {
  private readonly CategoryNameFinder: CategoryNameFinder;

  readonly QueryType = FindCategoryNameQuery.name;

  constructor({ categoryNameFinder }: Props) {
    this.CategoryNameFinder = categoryNameFinder;
  }
  readonly queryType: string;

  async execute(Query: FindCategoryNameQuery) {
    const { name } = Query.payload;
    
    const result = await this.CategoryNameFinder.execute(name);
    return { result }
  }

}
