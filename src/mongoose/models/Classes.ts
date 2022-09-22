import mongoose, { Schema, Document, Types } from "mongoose";

const ClassSchemaOptions = { toJSON: { virtuals: true }, timestamps: true };

export interface IClass extends Document {
  name: string;
  description?: string;
}

const ClassSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
  },
  ClassSchemaOptions
);

export default mongoose.model<IClass>("Class", ClassSchema);
