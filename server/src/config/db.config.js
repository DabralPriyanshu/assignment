import mongoose from "mongoose";
import ENV from "./server.config.js";
const connectDB = async () => {
  try {
    await mongoose.connect(ENV.DB_URL);
    console.log("DB Connected ");
  } catch (error) {
    console.log("Error connecting database", error);
    process.exit(1);
  }
};
export default connectDB;
