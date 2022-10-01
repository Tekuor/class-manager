import mongoose from "mongoose";

module.exports = async function () {
  const collections = Object.keys(mongoose.connection.collections);
  console.log("collections", collections);
  // console.log("tyyuu", (globalThis as any).mongod);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany({});
  }
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await (globalThis as any).mongod.stop();
};
