// Importas el validador que necesitas
import { IsNotEmpty } from 'class-validator';

export class DeleteProductDto {
  // Declaras el tipo y su validación
  @IsNotEmpty()
  // TODOS los campos deben ser readonly
  readonly name: string;
}
