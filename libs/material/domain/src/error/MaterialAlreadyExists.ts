export class MaterialAlreadyExists extends Error {
  constructor(name: string) {
    super(`The material with name '${name}' already exists.`);
  }
}