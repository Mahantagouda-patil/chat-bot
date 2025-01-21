import mongoose from "mongoose";

// create a function to connect to the db
const connectDB = async () => {
  try {
    console.log("Attempting to connect to MongoDB...");
    await mongoose.connect(process.env.DB_URL);
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default connectDB;
