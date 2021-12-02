import { IsEmail, IsEnum, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { Role } from '@frappe/account/domain';

export class AccountSignUpDto {
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;

  @IsNotEmpty()
  readonly name: string;

  @IsOptional()
  @IsEnum(Role)
  readonly role: Role = Role.ADMIN;
}
