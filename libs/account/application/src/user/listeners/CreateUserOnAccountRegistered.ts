import {EventSubscriberInterface, EventSubscribersMeta} from "@tshio/event-dispatcher";
import {CommandBus} from "@tshio/command-bus";
import {UserRegistered} from "@frappe/account/domain";
import {CreateUserCommand} from "../create";

interface CreateUserOnAccountRegisteredDeps {
  readonly commandBus: CommandBus;
}

export class CreateUserOnAccountRegistered implements EventSubscriberInterface {
  private readonly commandBus: CommandBus;

  constructor({ commandBus }: CreateUserOnAccountRegisteredDeps) {
    this.commandBus = commandBus;
  }

  getSubscribedEvents(): EventSubscribersMeta[] {
    return [
      { name: UserRegistered.name, method: 'execute' }
    ];
  }

  async execute(event: UserRegistered) {
    return this.commandBus.execute(new CreateUserCommand(event.payload));
  }
}
