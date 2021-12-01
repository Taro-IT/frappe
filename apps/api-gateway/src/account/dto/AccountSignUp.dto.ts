import { IsEmail, IsEnum, IsNotEmpty, MinLength } from 'class-validator';
import { Role } from '@frappe/account/domain';

export class AccountSignUpDto {
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;

  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsEnum(Role)
  readonly role: Role;
}
