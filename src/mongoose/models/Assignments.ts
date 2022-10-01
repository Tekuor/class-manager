import mongoose, { Schema, Document, Types } from "mongoose";

const AssignmentSchemaOptions = {
  toJSON: { virtuals: true },
  timestamps: true,
};

export interface IAssignment extends Document {
  name: string;
  description?: string;
  classId: Types.ObjectId;
  teacherId: Types.ObjectId;
  attachments?: string[];
  deadline: Date;
  isDeleted: Boolean;
}

const AssignmentSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    attachments: { type: [String] },
    classId: { type: Types.ObjectId, required: true },
    teacherId: { type: Types.ObjectId, required: true },
    deadline: { type: Date },
    isDeleted: { type: Boolean, defailt: false },
  },
  AssignmentSchemaOptions
);

export default mongoose.model<IAssignment>("Assignment", AssignmentSchema);
