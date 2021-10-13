import {EventSubscriberInterface, EventSubscribersMeta} from "@tshio/event-dispatcher";
import {EmailProvider, Mail} from "@frappe/email/domain";
import {UserRegistered} from "@frappe/account/domain";

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

    console.log(event.payload);

    const confirmEmail = Mail.fromPrimitives({
      id: 'd-55146a47fd044bceb5682c2e99d32602',
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
