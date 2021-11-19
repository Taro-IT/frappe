export class ProductNotFound extends Error {
    constructor(name: string) {
      super(`The product with name '${name}' was not found.`);
    }
  }