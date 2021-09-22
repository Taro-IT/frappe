export class InvalidUuid extends Error {

  constructor(value: string) {
    super(`value: ${ value } is not an uuid`);
  }
}
