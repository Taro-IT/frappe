import { EnumValueObject } from '@dinnosc/value-object';
import { InvalidRole } from '../../error';
import { Role } from '../../utils';

export class UserRole extends EnumValueObject<Role> {

  constructor(role: Role) {
    super(role, Object.values(Role));
  }

  protected throwErrorForInvalidValue(value: string | number): void {
    const isValid = Object.values(Role).includes(value as Role);

    if (!isValid) {
      throw new InvalidRole();
    }
  }
}
