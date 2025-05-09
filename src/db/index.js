import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    // database connect hone ke bad jo response ayga us ko handle kr skte hein variable me store kr ke
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    // jo response ayga database se  wo console pe show ho ga
    console.log(
      `\n MongoDb Connected DB HOST:  ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MongoDb Connection error:", error);
    process.exit(1);
  }
};
export default connectDB;
