import {isUUID} from "class-validator";
import {InvalidUuid} from "../errors";
import { v4 } from 'uuid';

export class Uuid {
  readonly value: string;

  constructor(value: string) {
    this.ensureIsUuid(value);

    this.value = value;
  }

  static create(): Uuid {
    return new Uuid(v4())
  }

  private ensureIsUuid(value: string): void {
    if (!isUUID(value)) {
      throw new InvalidUuid(value);
    }
  }
}
