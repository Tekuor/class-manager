import { IUser } from "../../mongoose/models/Users";

export interface IRequestUser extends IUser {}

export interface IRegisterResponse {
  user: IUser;
  token: string;
}
