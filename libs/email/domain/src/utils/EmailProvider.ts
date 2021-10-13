import { Mail } from '../model';

export interface EmailProvider {
  send(mail: Mail): Promise<void>;
}
