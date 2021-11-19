import { EventSubscriberInterface, EventSubscribersMeta } from '@tshio/event-dispatcher';
import { Email, EmailProvider } from '@frappe/email/domain';
import { PasswordResetCodeCreated } from '@frappe/account/domain';
import { EmailTemplates } from '../..';

interface SendEmailOnPasswordResetCodeCreatedDeps {
  readonly emailProvider: EmailProvider;
}

export class SendEmailOnPasswordResetCodeCreated implements EventSubscriberInterface {
  private readonly emailProvider: EmailProvider;

  constructor({ emailProvider }: SendEmailOnPasswordResetCodeCreatedDeps) {
    this.emailProvider = emailProvider;
  }

  getSubscribedEvents(): EventSubscribersMeta[] {
    return [{ name: PasswordResetCodeCreated.name, method: 'execute' }];
  }

  execute(event: PasswordResetCodeCreated) {
    const { email, code } = event.payload;

    const link = `${ process.env.DOMAIN_URL }/change-password?code=${ code }`;

    const confirmEmail = Email.fromPrimitives({
      id: EmailTemplates.Generic,
      to: email,
      data: {
        name: 'Estimado Usuario',
        body: '¡Muchas gracias por registrarte en Cínica! Esperamos que nuestros productos sean de tu agrado.',
        subject: 'Bienvenido a Cínica'
      }
    });

    console.log(confirmEmail);
    return this.emailProvider.send(confirmEmail)
  }
}
