export class EmailAlreadyExist extends Error {
  constructor(message: string) {
    super(message);
  }
}
