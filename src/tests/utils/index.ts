import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
let mongod: any;

export async function setupDatabase() {
  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  await mongoose
    .connect(`${uri}test`, {})
    .then(() => console.log("connected"))
    .catch((e) => console.log(e));
}

export async function dropDatabase() {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany({});
  }
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
}
