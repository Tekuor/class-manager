import { Types } from "mongoose";
import { Assignment } from "../../mongoose/models/Assignments";
import { IAssignment } from "./../../mongoose/models/Assignments";

class AssignmentService {
  async createAssignment(data: Omit<IAssignment, "isDeleted">) {
    try {
      const response = await Assignment.create(data);
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async updateAssignment(data: IAssignment, id: Types.ObjectId | string) {
    try {
      const response = await Assignment.findByIdAndUpdate(id, data);
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async getAssignment(id: Types.ObjectId | string) {
    try {
      const response = await Assignment.findById(id);
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async getAssignments(query: any) {
    try {
      const response = await Assignment.find(query);
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async deleteAssignment(id: Types.ObjectId | string) {
    try {
      const response = await Assignment.findByIdAndUpdate(id, {
        isDeleted: true,
      });
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
}

export default new AssignmentService();
