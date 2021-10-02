import {asClass, AwilixContainer} from "awilix";
import {asArray} from "@tshio/awilix-resolver";
import {CreateUserOnAccountRegistered} from "@frappe/account/application";

export const eventHandlers = (container: AwilixContainer) => {
  container.register({
    eventSubscribers: asArray<unknown>([
      asClass(CreateUserOnAccountRegistered)
    ])
  })
}
