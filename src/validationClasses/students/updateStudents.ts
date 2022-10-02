import { IsString, IsDate } from "class-validator";
import { Expose } from "class-transformer";

export class UpdateStudentValidation {
  @Expose()
  @IsString()
  firstName: String;

  @Expose()
  @IsString()
  lastName: String;

  @Expose()
  @IsString()
  classId: String;

  @Expose()
  @IsDate()
  dateOfBirth: Date;
}
