import { IsString, IsDate, IsMongoId } from "class-validator";
import { Expose } from "class-transformer";

export class UpdateStudentValidation {
  @Expose()
  @IsString()
  firstName: String;

  @Expose()
  @IsString()
  lastName: String;

  @Expose()
  @IsMongoId()
  classId: String;

  @Expose()
  @IsDate()
  dateOfBirth: Date;
}
