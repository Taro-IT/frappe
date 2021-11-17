import { asClass, AwilixContainer } from 'awilix';
import { asArray } from '@tshio/awilix-resolver';
import { UpdateCategoryCommandHandler } from '@frappe/category/application';
import { CreateCategoryCommandHandler } from '@frappe/category/application';
import { CreateOrderCommandHandler, GenerateOrderPdfCommandHandler } from '@frappe/order/application';
import { AccountSignUpCommandHandler, UpdateUserCommandHandler } from '@frappe/account/application';
import { UploadFileCommandHandler } from "@frappe/file-system/application";
import { CreateProductCommandHandler } from "@frappe/product/application";
import { DeleteCategoryCommandHandler } from '@frappe/category/application';

export const commandHandlers = (container: AwilixContainer) => {
  container.register({
    commandHandlers: asArray<unknown>([
      asClass(CreateCategoryCommandHandler),
      asClass(AccountSignUpCommandHandler),
      asClass(UploadFileCommandHandler),
      asClass(CreateOrderCommandHandler),
      asClass(UpdateCategoryCommandHandler),
      asClass(DeleteCategoryCommandHandler),
      asClass(CreateProductCommandHandler),
      asClass(GenerateOrderPdfCommandHandler),
      asClass(UpdateUserCommandHandler)
    ])
  });
};
