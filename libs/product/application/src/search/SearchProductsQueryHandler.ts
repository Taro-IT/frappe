import { QueryHandler, QueryResult } from '@tshio/query-bus';
import { SearchProductsQuery } from './SearchProductsQuery';
import { SearchQueryResponse } from '@frappe/common/utils';
import { ProductPrimitives } from '@frappe/product/domain';
import { ProductSearcher } from './ProductSearcher';

interface SearchProductsQueryHandlerDeps {
  readonly productSearcher: ProductSearcher;
}

type SearchProductsQueryResponse = QueryResult<SearchQueryResponse<ProductPrimitives>>;

export class SearchProductsQueryHandler implements QueryHandler<SearchProductsQuery, SearchProductsQueryResponse> {
  private readonly productSearcher: ProductSearcher;

  readonly queryType = SearchProductsQuery.name;

  constructor({ productSearcher }: SearchProductsQueryHandlerDeps) {
    this.productSearcher = productSearcher;
  }

  async execute(query: SearchProductsQuery): Promise<SearchProductsQueryResponse> {
    const { filters, order, offset, limit } = query.payload;

    const { products, total } = await this.productSearcher.execute(filters, order, limit, offset);

    return {
      result: {
        items: products,
        total
      }
    };
  }
}
