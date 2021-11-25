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
    const { clientName, address, items, dateCreated, subtotal, total } = event.payload;

    const itemsList = []

    items.forEach(item => {
      const newItem = {
        productName: item.productName,
        size: item.size,
        quantity: item.quantity,
        productPrice: item.productPrice * item.quantity,
        productImage: item.productImages[0]
      }

      itemsList.push(newItem)
    });
    
    const orderEmail = Email.fromPrimitives({
      id: EmailTemplates.NewOrder,
      to: address.email,
      data: {
        subject: '¡Gracias por comprar en Cínica!',
        clientName,
        orderDate: dateCreated,
        address: address,
        items: itemsList,
        subtotal,
        total
      }
    });
    console.log(orderEmail)
    return this.emailProvider.send(orderEmail)
  }
}
