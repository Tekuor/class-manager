import mongoose, { Schema, Document, Types } from "mongoose";

const StudentSchemaOptions = { toJSON: { virtuals: true }, timestamps: true };

export interface IStudent extends Document {
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

export default mongoose.model<IStudent>("Student", StudentSchema);
