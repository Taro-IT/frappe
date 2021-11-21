// User Story: Frappe 67

import { IsOptional } from 'class-validator';

export class UpdateMaterialDto {
  @IsOptional()
  readonly name?: string;

  @IsOptional()
  readonly image?: string;
}
