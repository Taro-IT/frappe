 // User Story: Frappe 981
import {EventSubscriberInterface, EventSubscribersMeta} from "@tshio/event-dispatcher";
import {EmailProvider, Email} from "@frappe/email/domain";
import {OrderGenerated} from "@frappe/order/domain";
import { EmailTemplates } from "../..";

interface SendEmailOnOrderGeneratedDeps {
  readonly emailProvider: EmailProvider;
}

export class SendEmailOnOrderGenerated implements EventSubscriberInterface {
  private readonly emailProvider: EmailProvider;

  constructor({ emailProvider }: SendEmailOnOrderGeneratedDeps) {
    this.emailProvider = emailProvider;
  }

  getSubscribedEvents(): EventSubscribersMeta[] {
    return [{ name: OrderGenerated.name, method: 'execute' }];
  }

  execute(event: OrderGenerated) {
    const { items, clientName, address } = event.payload;

    // const itemsList = items.map(item => {
    //   item.productName
    // })
    
    const orderEmail = Email.fromPrimitives({
      id: EmailTemplates.Generic,
      to: address.email,
      data: {
        name: clientName,
        body: `Muchas gracias por realizar tu compra. Tu pedido con los productos:\n`,
        subject: '¡Gracias por comprar en Cínica!'
      }
    });
    console.log(orderEmail)
    return this.emailProvider.send(orderEmail)
  }
}
