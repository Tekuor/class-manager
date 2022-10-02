import { Types } from "mongoose";
import { Teacher } from "../../mongoose/models/Teachers";
import { ITeacher } from "./../../mongoose/models/Teachers";

class TeacherService {
  async createTeacher(data: Omit<ITeacher, "isDeleted">) {
    try {
      const response = await Teacher.create(data);
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async updateTeacher(data: ITeacher, id: Types.ObjectId | string) {
    try {
      const response = await Teacher.findByIdAndUpdate(id, data);
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async getTeacher(id: Types.ObjectId | string) {
    try {
      const response = await Teacher.findById(id);
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async getTeachers(query: any) {
    try {
      const response = await Teacher.find(query);
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async deleteTeacher(id: Types.ObjectId | string) {
    try {
      const response = await Teacher.findByIdAndUpdate(id, { isDeleted: true });
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
}

export default new TeacherService();
