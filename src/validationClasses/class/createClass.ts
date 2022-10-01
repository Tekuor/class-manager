import { IsDefined, IsString, IsOptional } from "class-validator";
import { Expose } from "class-transformer";

export class CreateClassValidation {
  @IsDefined()
  @Expose()
  @IsString()
  name: String;

  @IsOptional()
  @IsString()
  @Expose()
  description: String;
}
