import { IsDefined, IsEmail, IsIn } from "class-validator";
import { Expose } from "class-transformer";
import { userRoles } from "../../mongoose/models/Users";

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
  @IsIn(userRoles)
  role: String;
}
