//User story: frappe-503
import { IsEmail } from 'class-validator';

export class CreatePasswordResetCodeDto {

  @IsEmail()
  readonly email: string;
}
