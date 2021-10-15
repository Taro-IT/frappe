export class InvalidEmail extends Error {
  constructor(value: string) {
    super(`value: ${value} is not an Email`);
  }
}
