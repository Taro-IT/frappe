import EmailService from "@sendgrid/mail";
import {EmailProvider, Email} from "@frappe/email/domain";

export class SendgridEmailProvider implements EmailProvider {
  private readonly client = EmailService;

  constructor() {
    this.client.setApiKey(process.env.SENDGRID_API_KEY);
  }

  /**
   * Sends an email through SendGrid using templates.
   * @param mail the Email that is going to be sent.
   */
  async send(mail: Email): Promise<void> {
    const { to, id, data } = mail.toPrimitives();

    await this.client.send({
      to,
      templateId: id,
      from: process.env.SENDGRID_EMAIL_FROM,
      dynamicTemplateData: data
    });
  }

  /**
   * Sends an email through SendGrid using templates.
   * @param mail the Email to us from the received email.
   */
  async receive(mail: Email): Promise<void> {
    const { to, id, data } = mail.toPrimitives();

    await this.client.send({
      to: process.env.SENDGRID_EMAIL_FROM,
      templateId: id,
      from:to,
      dynamicTemplateData: data
    });
  }
}
