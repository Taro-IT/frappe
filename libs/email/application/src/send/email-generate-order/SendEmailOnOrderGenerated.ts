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
    console.log("mandar correo");
    const { clientName, address, items, dateCreated, subtotal, total } = event.payload;

    const itemsList = []

    items.forEach(item => {

      const itemCustomParts = []
      
      item.customParts?.forEach(customPart => {
        const newCustomPart = {
          section: customPart.section,
          material: customPart.material
        }
        itemCustomParts.push(newCustomPart);
      });

      console.log(itemCustomParts)

      const newItem = {
        productName: item.productName,
        size: item.size,
        quantity: item.quantity,
        productPrice: item.productPrice * item.quantity,
        productImage: item.productImages[0],
        customParts: itemCustomParts
      }

      itemsList.push(newItem)
    });

    console.log(itemsList)

    const monthNames = [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre'
    ];
  
    const prettyDate = new Date(dateCreated);
    const year = prettyDate.getUTCFullYear();
    const month = prettyDate.getUTCMonth();
    const day = prettyDate.getUTCDate();

    const orderDate = `${day} de ${monthNames[month]} del ${year}`
    const orderAddress = `${address.address1}, ` + (address.address2 ? `${address.address2}, ` : ' ') +
      `\n${address.province}, ${address.city}, ${address.country}\n${address.zip}\n` + (address.company ? address.company : ' ');
    
    const orderEmail = Email.fromPrimitives({
      id: EmailTemplates.NewOrder,
      to: address.email,
      data: {
        subject: '¡Gracias por comprar en Cínica!',
        clientName,
        orderDate: orderDate,
        address: orderAddress,
        items: itemsList,
        subtotal,
        total
      }
    });
    console.log(orderEmail)
    return this.emailProvider.send(orderEmail)
  }
}
