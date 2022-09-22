import mongoose, { Schema, Document, HydratedDocument } from "mongoose";
import hashPassword from "../hooks/pre/userPassword";

const UserSchemaOptions = { toJSON: { virtuals: true }, timestamps: true };

export type IUserRole = "teacher" | "student";
export const userRoles = ["teacher", "student"];

export type IUserStatus = "active" | "pending";
export const userStatus = ["active", "pending"];

export interface IUser extends Document {
  email: string;
  password: string;
  role: IUserRole;
  status: IUserStatus;
  profileImage?: string;
}

const UserSchema: Schema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: userRoles, required: true },
    status: { type: String, enum: userStatus, required: true },
    profileImage: { type: String },
  },
  UserSchemaOptions
);

UserSchema.pre(
  "save",
  async function (this: HydratedDocument<IUser>, next: any) {
    const user = this;
    await hashPassword(user);
    next();
  }
);

export const User = mongoose.model<IUser>("User", UserSchema);
