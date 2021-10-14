import EmailService from "@sendgrid/mail";
import {EmailProvider, Email} from "@frappe/email/domain";

export class SendgridEmailProvider implements EmailProvider {
  private readonly client = EmailService;

  constructor() {
    this.client.setApiKey(process.env.SENDGRID_API_KEY);
  }

  /**
   * Sends the email through SendGrid using templates.
   * @param mail 
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
}
