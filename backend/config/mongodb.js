import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectioninstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `Mongodb connection Host:${connectioninstance.connection.host}`
    );
  } catch (error) {
    console.log(`Mongodb connection error is:${error}`);
    process.exit(1);
  }
};

export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.
