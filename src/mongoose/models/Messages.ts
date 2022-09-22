import mongoose, { Schema, Document, Types } from "mongoose";

const MessageSchemaOptions = {
  toJSON: { virtuals: true },
  timestamps: true,
};

export interface IMessage extends Document {
  title: string;
  description?: string;
  status: string;
  deliveryDate: string;
  recipientIds: Types.ObjectId[];
  teacherId: Types.ObjectId;
}

const MessageSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, required: true },
    deliveryDate: { type: Date, required: true },
    recipientIds: { type: Types.ObjectId, required: true },
    teacherId: { type: Types.ObjectId },
  },
  MessageSchemaOptions
);

export default mongoose.model<IMessage>("Message", MessageSchema);
