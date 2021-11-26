import { IsNotEmpty, IsOptional } from 'class-validator';

export class CommentDto {

  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly subject: string;

  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly message: string;

  @IsOptional()
  @IsNotEmpty()
  readonly lastName: string;

  @IsOptional()
  @IsNotEmpty()
  readonly phone: string;

}
