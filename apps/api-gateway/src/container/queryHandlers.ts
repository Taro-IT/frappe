import { asClass, AwilixContainer } from 'awilix';
import { asArray } from '@tshio/awilix-resolver';
import { FindCategoryNameQueryHandler, ListCategoryQueryHandler } from '@frappe/category/application';
import { ListOrderQueryHandler } from '@frappe/order/application';
import { SearchProductsQueryHandler, FindProductIdQueryHandler } from '@frappe/product/application';
import { FindMaterialNameQueryHandler, ListMaterialQueryHandler } from '@frappe/material/application';
import { SearchUsersQueryHandler } from '@frappe/account/application';

export const queryHandlers = (container: AwilixContainer) => {
  container.register({
    queryHandlers: asArray<unknown>([
      asClass(FindCategoryNameQueryHandler),
      asClass(ListCategoryQueryHandler),
      asClass(ListOrderQueryHandler),
      asClass(SearchProductsQueryHandler),
      asClass(FindMaterialNameQueryHandler),
      asClass(ListMaterialQueryHandler),
      asClass(SearchUsersQueryHandler),
      asClass(FindProductIdQueryHandler),
    ])
  });
};
