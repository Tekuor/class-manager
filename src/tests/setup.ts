import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

module.exports = async function () {
  (globalThis as any).mongod = await MongoMemoryServer.create();
  const uri = (globalThis as any).mongod.getUri();
  console.log("zdy6t", uri);
  await mongoose
    .connect(`${uri}test`, {})
    .then(() => console.log("connected"))
    .catch((e) => console.log(e));
  const a = await mongoose.connection.createCollection("Users");
  console.log("fnun", a);
};
