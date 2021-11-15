import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateUserDto {

  @IsOptional()
  @IsNotEmpty()
  readonly name?: string;
}
