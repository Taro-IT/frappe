import {EventSubscriberInterface, EventSubscribersMeta} from "@tshio/event-dispatcher";
import {CommandBus} from "@tshio/command-bus";
import {UserRegistered} from "@frappe/account/domain";
import {UserCreator} from "../create";

interface CreateUserOnAccountRegisteredDeps {
  readonly userCreator: UserCreator;
}

export class CreateUserOnAccountRegistered implements EventSubscriberInterface {
  private readonly userCreator: UserCreator;

  constructor({ userCreator }: CreateUserOnAccountRegisteredDeps) {
    this.userCreator = userCreator;
  }

  getSubscribedEvents(): EventSubscribersMeta[] {
    return [
      { name: UserRegistered.name, method: 'execute' }
    ];
  }

  async execute(event: UserRegistered) {
    const { id, name, email } = event.payload;

    return this.userCreator.execute(id, email, name);
  }
}
