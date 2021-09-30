import {UserPrimitives} from '@frappe/account/domain';
import {Command} from "@tshio/command-bus";

type AccountSignUpCommandPayload = Omit<UserPrimitives, 'id'> & {
  readonly password: string;
};

export class AccountSignUpCommand implements Command<AccountSignUpCommandPayload> {
  readonly type = AccountSignUpCommand.name;

  constructor(readonly payload: AccountSignUpCommandPayload) { }
}
