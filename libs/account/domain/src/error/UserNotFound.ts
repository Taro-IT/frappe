export class UserNotFound extends Error {
  constructor(id?: string) {
    super(id ? `user with id: ${ id } does not exist` : 'user does not exist');
  }
}
