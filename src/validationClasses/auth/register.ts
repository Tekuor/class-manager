import { IsDefined, IsEmail, IsString, MaxLength } from "class-validator";
import { Expose } from "class-transformer";

export class RegisterValidation {
  @IsDefined()
  @Expose()
  @IsEmail()
  email: String;

  @IsDefined()
  @Expose()
  password: String;

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
  @MaxLength(10)
  phone: String;
}
