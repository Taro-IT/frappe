// User Story: Frappe 71

import { IsNotEmpty } from 'class-validator';

export class CreateMaterialDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly image: string;
}
