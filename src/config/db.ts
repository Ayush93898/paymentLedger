import mongoose from "mongoose";

const connectDb = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) {
      throw new Error("MONGO_URI is missing from environment variables");
    }
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully");
  } catch (error: unknown) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};


export default connectDb;