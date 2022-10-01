import mongoose, { Schema } from "mongoose";

const ClassSchemaOptions = { toJSON: { virtuals: true }, timestamps: true };

export interface IClass {
  name: string;
  description?: string;
  isDeleted: boolean;
}

const ClassSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    isDeleted: { type: Boolean, defailt: false },
  },
  ClassSchemaOptions
);

export const Class = mongoose.model<IClass>("Class", ClassSchema);
