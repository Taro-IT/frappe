import {IsEmail, IsNotEmpty, MinLength} from "class-validator";

export class AccountSignUpDto {

  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;

  @IsNotEmpty()
  readonly name: string;
}
