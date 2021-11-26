import {EventSubscriberInterface, EventSubscribersMeta} from "@tshio/event-dispatcher";
import {EmailProvider, Email, CommentSent} from "@frappe/email/domain";
import { EmailTemplates } from "../..";

interface SendEmailOnCommentSentDeps {
  readonly emailProvider: EmailProvider;
}

export class SendEmailOnCommentSent implements EventSubscriberInterface {
  private readonly emailProvider: EmailProvider;

  constructor({ emailProvider }: SendEmailOnCommentSentDeps) {
    this.emailProvider = emailProvider;
  }

  getSubscribedEvents(): EventSubscribersMeta[] {
    return [{ name: CommentSent.name, method: 'execute' }];
  }

  execute(event: CommentSent) {
    const { name ,  email,  subject, message, lastName, phone  } = event.payload;

   
    
    const confirmEmail = Email.fromPrimitives({
      id: EmailTemplates.Generic,
      to: process.env.SENDGRID_EMAIL_TO,
      data: {
        name: name + " " + lastName,
        body: `Ha comentado: \n ${message} \n Y ha dejado su número telefónico: ${phone} y su correo electónico: ${email}`,
        subject: subject
      }
    });

    
    return this.emailProvider.receive(confirmEmail)
  }
}
