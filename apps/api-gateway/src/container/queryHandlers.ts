import { asClass, AwilixContainer } from 'awilix';
import { asArray } from '@tshio/awilix-resolver';
import { FindCategoryNameQueryHandler, ListCategoryQueryHandler } from '@frappe/category/application';
import { ListOrderQueryHandler } from '@frappe/order/application';

export const queryHandlers = (container: AwilixContainer) => {
  container.register({
    queryHandlers: asArray<unknown>([
      asClass(FindCategoryNameQueryHandler),
      asClass(ListCategoryQueryHandler),
      asClass(ListOrderQueryHandler)
    ])
  });
};
