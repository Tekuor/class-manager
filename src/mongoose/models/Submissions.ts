import mongoose, { Schema, Document, Types } from "mongoose";

const SubmissionSchemaOptions = {
  toJSON: { virtuals: true },
  timestamps: true,
};

export interface ISubmission extends Document {
  studentId: Types.ObjectId;
  assignmentId: Types.ObjectId;
  attachments: string[];
  marks: string;
  status: string;
  comment?: string;
  isDeleted: Boolean;
}

const SubmissionSchema: Schema = new Schema(
  {
    studentId: { type: String, required: true },
    assignmentId: { type: String, required: true },
    attachments: { type: [String] },
    marks: { type: Number },
    status: { type: String, required: true },
    comment: { type: String },
    isDeleted: { type: Boolean, defailt: false },
  },
  SubmissionSchemaOptions
);

export default mongoose.model<ISubmission>("Submission", SubmissionSchema);
