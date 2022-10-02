import { IsDefined, IsString, IsOptional, IsDate } from "class-validator";
import { Expose } from "class-transformer";

export class CreateStudentValidation {
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
  @IsString()
  classId: String;

  @IsOptional()
  @Expose()
  @IsDate()
  dateOfBirth: Date;
}
