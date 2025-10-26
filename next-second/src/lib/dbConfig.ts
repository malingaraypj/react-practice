import mongoose from "mongoose";

const MongoURI = process.env.MONGO_URI;

if (!MongoURI) {
  throw new Error("MONGO_URI is not defined");
}

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    await mongoose.connect(MongoURI);
    isConnected = true;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
