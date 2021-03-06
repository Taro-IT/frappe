// User story: frappe-511
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class UpdatePasswordDto {

  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;
}
