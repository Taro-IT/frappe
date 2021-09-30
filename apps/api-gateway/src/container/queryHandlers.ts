import {asClass, AwilixContainer} from "awilix";
import {asArray} from "@tshio/awilix-resolver";
import { FindCategoryNameQueryHandler } from "@frappe/category/application";

export const queryHandlers = (container: AwilixContainer) => {
  container.register({
    queryHandlers: asArray<unknown>([
      asClass(FindCategoryNameQueryHandler)
    ])
  })
}
