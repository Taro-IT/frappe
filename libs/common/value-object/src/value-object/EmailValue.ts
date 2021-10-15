import { isEmail } from 'class-validator';
import { InvalidEmail } from '../errors';

export class EmailValue {
  readonly value: string;

  constructor(value: string) {
    this.ensureIsValidEmail(value);

    this.value = value;
  }

  ensureIsValidEmail(value: string) {
    if (!isEmail(value)) {
      throw new InvalidEmail(value);
    }
  }
}
