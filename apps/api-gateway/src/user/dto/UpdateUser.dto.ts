import { Role } from '@frappe/account/domain';
import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateUserDto {

  @IsOptional()
  @IsNotEmpty()
  readonly name?: string;

  @IsOptional()
  @IsEnum(Role)
  readonly role: Role;
}
