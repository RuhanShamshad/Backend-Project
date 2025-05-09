import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./env",
});
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is runing on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("mongodb connection faield:", err);
  });
/*
import express from "express";
const app = express()(
  // Brackets isliye hain taake function likhne ke baad turant chale
  // (Yani humne function likha bhi aur call bhi kiya — dono ek sath)
  async () => {
    try {
      //(Database ka name DB_NAME Hamne import kia h constants.js File me se)
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      app.on("error", (err) => {
        console.log("error:", err);
        throw err;
      });
      app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
      });
    } catch (error) {
      console.error("ERROR:", error);
      throw error;
    }
  }
)();
*/
