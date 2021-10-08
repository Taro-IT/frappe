import {IsNotEmpty, IsString} from "class-validator";

export class CreateCategoryDto {

  @IsNotEmpty()
  readonly name: string;
}
