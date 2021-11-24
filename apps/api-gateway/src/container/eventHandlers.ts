import {asClass, AwilixContainer} from "awilix";
import {asArray} from "@tshio/awilix-resolver";
import {CreateUserOnAccountRegistered} from "@frappe/account/application";
import {SendEmailOnOrderUpdateStatus, SendEmailOnUserRegistered, SendEmailOnOrderGenerated} from "@frappe/email/application";

export const eventHandlers = (container: AwilixContainer) => {
  container.register({
    eventSubscribers: asArray<unknown>([
      asClass(CreateUserOnAccountRegistered),
      asClass(SendEmailOnUserRegistered),
      asClass(SendEmailOnOrderUpdateStatus),
      asClass(SendEmailOnOrderGenerated),
    ])
  })
}
