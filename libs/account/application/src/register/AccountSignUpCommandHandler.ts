import {CommandHandler} from "@tshio/command-bus";
import {AccountSignUpCommand} from "./AccountSignUpCommand";
import {AccountSignUpper} from "./AccountSignUpper";

interface AccountSignUpCommandHandlerDeps {
  readonly accountSignUpper: AccountSignUpper;
}

export class AccountSignUpCommandHandler implements CommandHandler<AccountSignUpCommand> {
  private readonly accountSignUpper: AccountSignUpper;
  readonly commandType = AccountSignUpCommand.name;

  constructor({ accountSignUpper }: AccountSignUpCommandHandlerDeps) {
    this.accountSignUpper = accountSignUpper;
  }

  execute(command: AccountSignUpCommand): Promise<void> {
    const { email, password, name } = command.payload;

    return this.accountSignUpper.execute(email, password, name);
  }

}
