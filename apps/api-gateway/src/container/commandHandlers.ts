import { asClass, AwilixContainer } from 'awilix';
import { asArray } from '@tshio/awilix-resolver';
import { UpdateCategoryCommandHandler } from '@frappe/category/application';
import { CreateCategoryCommandHandler } from '@frappe/category/application';
import { AccountSignUpCommandHandler } from '@frappe/account/application';
import { DeleteCategoryCommandHandler } from "@frappe/category/application";

export const commandHandlers = (container: AwilixContainer) => {
  container.register({
    commandHandlers: asArray<unknown>([
      asClass(CreateCategoryCommandHandler),
      asClass(UpdateCategoryCommandHandler),
      asClass(DeleteCategoryCommandHandler),
      asClass(AccountSignUpCommandHandler)
    ])
  });
};
