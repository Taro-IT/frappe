import {Query} from "@tshio/query-bus";
import {SearchQueryPayload} from "@frappe/common/utils";
import {Product} from "@frappe/product/domain";

type SearchProductsQueryPayload = SearchQueryPayload<Product>;

export class SearchProductsQuery implements Query<SearchProductsQueryPayload> {
  readonly type = SearchProductsQuery.name;
  
  constructor(readonly payload: SearchProductsQueryPayload) {}
}
