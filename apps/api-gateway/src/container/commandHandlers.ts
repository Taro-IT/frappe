import {asClass, AwilixContainer} from "awilix";
import {asArray} from "@tshio/awilix-resolver";
import {CreateCategoryCommandHandler, UpdateCategoryCommandHandler} from "@frappe/category/application";

export const commandHandlers = (container: AwilixContainer) => {
  container.register({
    commandHandlers: asArray<unknown>([
      asClass(CreateCategoryCommandHandler),
      asClass(UpdateCategoryCommandHandler)
    ])
  })
}
