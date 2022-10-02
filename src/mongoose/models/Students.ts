import mongoose, { Schema, Types } from "mongoose";

const StudentSchemaOptions = { toJSON: { virtuals: true }, timestamps: true };

export interface IStudent {
  firstName: string;
  lastName: string;
  classId: Types.ObjectId;
  dateOfBirth: Date;
  isDeleted: boolean;
}

const StudentSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    classId: { type: Types.ObjectId, required: true },
    dateOfBirth: { type: Date, required: true },
    isDeleted: { type: Boolean, defailt: false },
  },
  StudentSchemaOptions
);

export const Student = mongoose.model<IStudent>("Student", StudentSchema);
