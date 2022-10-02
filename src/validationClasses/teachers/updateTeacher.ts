import {
  IsDefined,
  IsString,
  IsOptional,
  MaxLength,
  IsArray,
} from "class-validator";
import { Expose } from "class-transformer";

export class UpdateTeacherValidation {
  @Expose()
  @IsString()
  firstName: String;

  @Expose()
  @IsString()
  lastName: String;

  @Expose()
  @IsArray()
  classIda: String[];

  @Expose()
  @MaxLength(10)
  phone: String;
}
