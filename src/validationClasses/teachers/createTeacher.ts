import { IsDefined, IsString, MaxLength, IsArray } from "class-validator";
import { Expose } from "class-transformer";

export class CreateTeacherValidation {
  @IsDefined()
  @Expose()
  @IsString()
  firstName: String;

  @IsDefined()
  @Expose()
  @IsString()
  lastName: String;

  @IsDefined()
  @Expose()
  @IsArray()
  classIda: String[];

  @IsDefined()
  @Expose()
  @MaxLength(10)
  phone: String;
}
