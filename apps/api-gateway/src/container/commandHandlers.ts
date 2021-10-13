import {asClass, AwilixContainer} from "awilix";
import {asArray} from "@tshio/awilix-resolver";
import {UpdateCategoryCommandHandler} from "@frappe/category/application";
import {CreateCategoryCommandHandler} from "@frappe/category/application";
import {AccountSignUpCommandHandler} from "@frappe/account/application";
import { UploadFileCommandHandler } from "@frappe/file-system/application";

export const commandHandlers = (container: AwilixContainer) => {
  container.register({
    commandHandlers: asArray<unknown>([
      asClass(CreateCategoryCommandHandler),
      asClass(UpdateCategoryCommandHandler),
      asClass(AccountSignUpCommandHandler),
      asClass(UploadFileCommandHandler)
    ])
  })
}
