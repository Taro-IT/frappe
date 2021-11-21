export class MaterialIdNotFound extends Error {
  constructor(id: string) {
    super(`The material with id '${id}' was not found.`);
  }
}
