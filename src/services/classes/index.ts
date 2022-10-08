import { Types } from "mongoose";
import { Class } from "../../mongoose/models/Classes";
import { IClass } from "./../../mongoose/models/Classes";

class ClassService {
  async createClass(data: Omit<IClass, "isDeleted">) {
    try {
      const response = await Class.create(data);
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async updateClass(data: Partial<IClass>, id: Types.ObjectId | string) {
    try {
      const response = await Class.findByIdAndUpdate(id, data);
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async getClass(id: Types.ObjectId | string) {
    try {
      const response = await Class.findById(id);
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async getClasses(query: any) {
    try {
      const response = await Class.find(query);
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async getClassBy(query: any) {
    try {
      const response = await Class.findOne(query);
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async deleteClass(id: Types.ObjectId | string) {
    try {
      const response = await Class.findByIdAndUpdate(id, { isDeleted: true });
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
}

export default new ClassService();
