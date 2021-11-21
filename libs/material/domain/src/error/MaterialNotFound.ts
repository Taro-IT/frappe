export class MaterialNotFound extends Error {
  constructor(name: string) {
    super(`The material with name '${name}' was not found.`);
  }
}