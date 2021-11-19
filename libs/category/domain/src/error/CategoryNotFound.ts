export class CategoryNotFound extends Error {
  constructor(name: string) {
    super(`The category with name '${name}' was not found.`);
  }
}
