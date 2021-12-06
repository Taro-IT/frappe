import { Role } from './Role';

export interface UserPrimitives {
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly role: Role;
}
