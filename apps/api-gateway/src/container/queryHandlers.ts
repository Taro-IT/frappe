import { asClass, AwilixContainer } from 'awilix';
import { asArray } from '@tshio/awilix-resolver';
import { FindCategoryNameQueryHandler, ListCategoryQueryHandler } from '@frappe/category/application';
import { ListOrderQueryHandler } from '@frappe/order/application';
import { SearchProductsQueryHandler } from '@frappe/product/application';
import { SearchUsersQueryHandler } from '@frappe/account/application';

export const queryHandlers = (container: AwilixContainer) => {
  container.register({
    queryHandlers: asArray<unknown>([
      asClass(FindCategoryNameQueryHandler),
      asClass(ListCategoryQueryHandler),
      asClass(ListOrderQueryHandler),
      asClass(SearchProductsQueryHandler),
      asClass(SearchUsersQueryHandler)
    ])
  });
};
