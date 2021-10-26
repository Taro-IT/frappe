export class ProductAlreadyExists extends Error {
  constructor(name: string) {
    super(`The product with name '${name}' already exists.`);
  }
}