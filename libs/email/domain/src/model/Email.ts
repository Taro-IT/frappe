import {EmailAddress} from "./EmailAddress";
import {EmailTemplateId} from "./EmailTemplateId";
import {EmailTemplateData} from "./EmailTemplateData";
import {EmailPrimitives} from "../utils";

export class Email {

  constructor(
    readonly id: EmailTemplateId,
    readonly to: EmailAddress,
    readonly data: EmailTemplateData
  ) { }

  static fromPrimitives(primitives: EmailPrimitives): Email {

    return new Email(
      new EmailTemplateId(primitives.id),
      new EmailAddress(primitives.to),
      new EmailTemplateData(primitives.data)
    )
  }

  toPrimitives(): EmailPrimitives {
    return {
      id: this.id.value,
      to: this.to.value,
      data: this.data.value,
    }
  }
}
