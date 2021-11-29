import {asClass, AwilixContainer} from "awilix";
import {asArray} from "@tshio/awilix-resolver";
import {CreateUserOnAccountRegistered} from "@frappe/account/application";
import { SendEmailOnOrderUpdateStatus, SendEmailOnPasswordResetCodeCreated, SendEmailOnUserRegistered, SendEmailOnOrderGenerated } from '@frappe/email/application';
import { CreateProductOnStripe, CreateStripePriceOnProductCreated } from "@frappe/product/application";
import { SendEmailOnCommentSent } from "@frappe/email/application";


export const eventHandlers = (container: AwilixContainer) => {
  container.register({
    eventSubscribers: asArray<unknown>([
      asClass(CreateUserOnAccountRegistered),
      asClass(SendEmailOnUserRegistered),
      asClass(SendEmailOnPasswordResetCodeCreated),
      asClass(SendEmailOnOrderUpdateStatus),
      asClass(SendEmailOnOrderGenerated),
      asClass(CreateProductOnStripe),
      asClass(CreateStripePriceOnProductCreated),
      asClass(SendEmailOnCommentSent),
    ])
  })
}
