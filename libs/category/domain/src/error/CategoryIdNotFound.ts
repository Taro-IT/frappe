export class CategoryIdNotFound extends Error{
  constructor(id: string) {
    super(`The category with id '${id}' was not found.`);
  }
}