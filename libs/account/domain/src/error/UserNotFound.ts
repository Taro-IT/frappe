export class UserNotFound extends Error {
  constructor(id: string) {
    super(`user with id: ${ id } does not exist`)
  }
}
