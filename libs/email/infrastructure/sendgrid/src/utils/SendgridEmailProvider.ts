import MailService from "@sendgrid/mail";
import {EmailProvider, Mail} from "@frappe/email/domain";

export class SendgridEmailProvider implements EmailProvider {
  private readonly client = MailService;

  constructor() {
    this.client.setApiKey(process.env.SENDGRID_API_KEY);
  }

  async send(mail: Mail): Promise<void> {
    const { to, id, data } = mail.toPrimitives();

    await this.client.send({
      to,
      templateId: id,
      from: process.env.SENDGRID_EMAIL_FROM,
      dynamicTemplateData: data
    });
  }
}
