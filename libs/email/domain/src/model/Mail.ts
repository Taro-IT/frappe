import {MailEmail} from "./MailEmail";
import {MailTemplateId} from "./MailTemplateId";
import {MailTemplateData} from "./MailTemplateData";
import {MailPrimitives} from "../utils";

export class Mail {

  constructor(
    readonly id: MailTemplateId,
    readonly to: MailEmail,
    readonly data: MailTemplateData
  ) { }

  static fromPrimitives(primitives: MailPrimitives): Mail {
    console.log(primitives);

    return new Mail(
      new MailTemplateId(primitives.id),
      new MailEmail(primitives.to),
      new MailTemplateData(primitives.data)
    )
  }

  toPrimitives(): MailPrimitives {
    return {
      id: this.id.value,
      to: this.to.value,
      data: this.data.value,
    }
  }
}
