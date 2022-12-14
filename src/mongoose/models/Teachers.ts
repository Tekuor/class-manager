import mongoose, { Schema, Document, Types } from "mongoose";

const TeacherSchemaOptions = { toJSON: { virtuals: true }, timestamps: true };

export interface ITeacher {
  firstName: string;
  lastName: string;
  classIds?: Types.ObjectId[];
  phone: string;
  isDeleted: Boolean;
}

const TeacherSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    classIds: { type: [Types.ObjectId] },
    phone: { type: String, required: true },
    isDeleted: { type: Boolean, defailt: false },
  },
  TeacherSchemaOptions
);

export const Teacher = mongoose.model<ITeacher>("Teacher", TeacherSchema);
