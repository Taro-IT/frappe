export class OrderNotFound extends Error {
  constructor(id: string) {
    super(`The order with id '${id}' was not found.`);
  }
}
