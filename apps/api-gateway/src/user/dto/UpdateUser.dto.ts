import { Role } from '@frappe/account/domain';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateUserDto {

  @IsOptional()
  @IsNotEmpty()
  readonly name?: string;

  @IsOptional()
  readonly role?: Role;
}
