// User Story: Frappe 67

import { IsNotEmpty } from 'class-validator';

export class UpdateMaterialDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly image: string;
}
