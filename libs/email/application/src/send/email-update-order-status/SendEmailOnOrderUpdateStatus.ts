//User Story: frappe-507
import {EventSubscriberInterface, EventSubscribersMeta} from "@tshio/event-dispatcher";
import {EmailProvider, Email} from "@frappe/email/domain";
import {OrderUpdateStatus} from "@frappe/order/domain";
import { EmailTemplates } from "../..";

interface SendEmailOnOrderUpdateStatusDeps {
  readonly emailProvider: EmailProvider;
}

export class SendEmailOnOrderUpdateStatus implements EventSubscriberInterface {
  private readonly emailProvider: EmailProvider;

  constructor({ emailProvider }: SendEmailOnOrderUpdateStatusDeps) {
    this.emailProvider = emailProvider;
  }

  getSubscribedEvents(): EventSubscribersMeta[] {
    return [{ name: OrderUpdateStatus.name, method: 'execute' }];
  }

  execute(event: OrderUpdateStatus) {
    const { address , clientName, status, dateCreated } = event.payload;

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

    const emailText = `Tu orden del ${day} de ${monthNames[month]} del ${year} ahora se encuentra ${status}.`;

    const confirmEmail = Email.fromPrimitives({
      id: EmailTemplates.UpdateOrderStatus,
      to: address.email,
      data: {
        name: clientName,
        body: emailText,
        subject: '¡Tu orden de Cínica está más cerca!'
      }
    });

    return this.emailProvider.send(confirmEmail)
  }
}
