import {UserPrimitives} from "@frappe/account/domain";
import {Command} from "@tshio/command-bus";

type CreateUserCommandPayload = UserPrimitives

export class CreateUserCommand implements Command<CreateUserCommandPayload>{

  readonly type = CreateUserCommand.name;

  constructor(
    readonly payload: CreateUserCommandPayload
  ) {
  }

}
