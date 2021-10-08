export class OrderAlreadyExists extends Error{
  constructor(id: string) {
    super(`The order with id '${id}' already exists.`);
  }
}