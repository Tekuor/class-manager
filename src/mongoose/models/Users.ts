import mongoose, { Schema, HydratedDocument, Types } from "mongoose";
import hashPassword from "../hooks/pre/userPassword";
import bcrypt from "bcrypt";
const UserSchemaOptions = { toJSON: { virtuals: true }, timestamps: true };

export type IUserRole = "teacher" | "student";
export const userRoles = ["teacher", "student"];

export type IUserStatus = "active" | "pending" | "pendingClaim";
export const userStatus = ["active", "pending", "pendingClaim"];

export interface IUser {
  email: string;
  password: string;
  role: IUserRole;
  status: IUserStatus;
  profileImage?: string;
  isDeleted: Boolean;
  accountId: Types.ObjectId;
}

const UserSchema: Schema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: userRoles, required: true },
    status: { type: String, enum: userStatus, required: true },
    profileImage: { type: String },
    accountId: { type: Types.ObjectId, required: true },
    isDeleted: { type: Boolean, defailt: false },
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

UserSchema.pre(
  "findOneAndUpdate",
  async function (this: HydratedDocument<IUser>, next: any) {
    const user = (this as any)._update;
    if (user.password) {
      const encryptedUserPassword = await bcrypt.hash(user.password, 10);
      user.password = encryptedUserPassword;
      next();
    }
    next();
  }
);

export const User = mongoose.model<IUser>("User", UserSchema);
