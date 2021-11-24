export class UserNotFound extends Error {
  constructor(id?: string) {
    super(id ? `el usuario con id: ${ id } no existe` : 'el usuario no existe');
  }
}
