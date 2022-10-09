import { Types } from "mongoose";
import { IUserRole, User } from "../../mongoose/models/Users";
import { IUser } from "./../../mongoose/models/Users";

interface IUserUpdate {
  status: IUserRole;
  password: string;
}
class UserService {
  async createUser(data: Omit<IUser, "isDeleted">) {
    try {
      const response = await User.create(data);
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async updateUser(data: Partial<IUserUpdate>, id: Types.ObjectId) {
    try {
      const response = await User.findByIdAndUpdate(id, data);
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async getUser(id: Types.ObjectId) {
    try {
      const response = await User.findById(id);
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async getOneUser(query: any) {
    try {
      const response = await User.findOne(query);
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async getUsers(query: any) {
    try {
      const response = await User.find(query);
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async deleteUser() {
    try {
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
}

export default new UserService();
