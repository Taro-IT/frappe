import {EventSubscriberInterface, EventSubscribersMeta} from "@tshio/event-dispatcher";
import {EmailProvider, Email} from "@frappe/email/domain";
import {UserRegistered} from "@frappe/account/domain";
import { EmailTemplates } from "../..";

interface SendEmailOnUserRegisteredDeps {
  readonly emailProvider: EmailProvider;
}

export class SendEmailOnUserRegistered implements EventSubscriberInterface {
  private readonly emailProvider: EmailProvider;

  constructor({ emailProvider }: SendEmailOnUserRegisteredDeps) {
    this.emailProvider = emailProvider;
  }

  getSubscribedEvents(): EventSubscribersMeta[] {
    return [{ name: UserRegistered.name, method: 'execute' }];
  }

  execute(event: UserRegistered) {
    const { email, name } = event.payload;

    const confirmEmail = Email.fromPrimitives({
      id: EmailTemplates.Generic,
      to: email,
      data: {
        name,
        body: 'Body',
        subject: 'Bienvenido a Cinica'
      }
    });

    return this.emailProvider.send(confirmEmail)
  }
}
