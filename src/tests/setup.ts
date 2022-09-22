import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

module.exports = async function () {
  (globalThis as any).mongod = await MongoMemoryServer.create();
  const uri = (globalThis as any).mongod.getUri();
  await mongoose.connect(uri, {});
};
