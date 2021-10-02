import { Event } from '@tshio/event-dispatcher';
import {UserPrimitives} from "../utils";

export class UserRegistered implements Event {
  readonly name = UserRegistered.name;

  constructor(readonly payload: UserPrimitives) { }
}
