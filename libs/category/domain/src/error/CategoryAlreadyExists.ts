export class CategoryAlreadyExists extends Error {
  constructor(name: string) {
    super(`The category with name '${name}' already exists.`);
  }
}
