import { serialize } from "cookie";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

export const connectDB = async () => {
  const { connection } = await mongoose.connect(process.env.MONGO_URI, {
    dbName: "NextTodo",
  });

  console.log(`Database connected on: ${connection.host}`);
};

export const cookieSetter = (headers, token, set) => {
  headers.append(
    "Set-Cookie",
    serialize("token", set ? token : "", {
      path: "/",
      httpOnly: true,
      maxAge: set ? 15 * 24 * 60 * 60 * 1000 : 0,
      sameSite: "strict",
    })
  );
};

export const jwtToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET);
};
