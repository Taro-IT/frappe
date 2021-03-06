import { Email } from '../model';

export interface EmailProvider {
  send(mail: Email): Promise<void>;
  receive(mail: Email): Promise<void>;
}
