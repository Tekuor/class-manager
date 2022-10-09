import { IsDefined, MinLength, IsString } from "class-validator";
import { Expose } from "class-transformer";

export class ChangePasswordValidation {
  @IsDefined()
  @MinLength(6)
  @Expose()
  @IsString()
  oldPassword: String;

  @IsDefined()
  @MinLength(6)
  @IsString()
  @Expose()
  newPassword: String;
}
