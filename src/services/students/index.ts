// @ts-nocheck
import { Types } from "mongoose";
import { Student } from "../../mongoose/models/Students";
import { IStudent } from "./../../mongoose/models/Students";

class StudentService {
  async createStudent(data: Omit<IStudent, "isDeleted">) {
    try {
      const response = await Student.create(data);
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async updateStudent(data: IStudent, id: Types.ObjectId | string) {
    try {
      const response = await Student.findByIdAndUpdate(id, data);
      return response;
    } catch (e: any) {
      // throw new Error(e.message);
    }
  }

  async getStudent(id: Types.ObjectId | string) {
    try {
      const response = await Student.findById(id);
      return response;
    } catch (e: any) {
      // throw new Error(e.message);
    }
  }

  async getStudents(query: any) {
    try {
      const response = await Student.find(query);
      return response;
    } catch (e: any) {
      // throw new Error(e.message);
    }
  }

  async deleteStudent(id: Types.ObjectId | string) {
    try {
      const response = await Student.findByIdAndUpdate(id, { isDeleted: true });
      return response;
    } catch (e: any) {
      // throw new Error(e.message);
    }
  }
}

export default new StudentService();
