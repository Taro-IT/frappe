import { EventSubscriberInterface, EventSubscribersMeta } from '@tshio/event-dispatcher';
import { EmailProvider } from '@frappe/email/domain';
import { PasswordResetCodeCreated } from '@frappe/account/domain';

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
    console.log(event);
    return;
  }
}
