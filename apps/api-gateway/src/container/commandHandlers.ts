import {asClass, AwilixContainer} from "awilix";
import {asArray} from "@tshio/awilix-resolver";
import {CreateCategoryCommandHandler} from "@frappe/category/application";
import {AccountSignUpCommandHandler} from "@frappe/account/application";

export const commandHandlers = (container: AwilixContainer) => {
  container.register({
    commandHandlers: asArray<unknown>([
      asClass(CreateCategoryCommandHandler),
      asClass(AccountSignUpCommandHandler)
    ])
  })
}
