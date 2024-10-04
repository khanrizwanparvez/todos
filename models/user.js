import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
      minLength: [8, "Password should have at least 8 characters"],
    },
  },
  {
    timestamps: true,
  }
);

mongoose.models = {};

export const User = mongoose.model("User", userSchema);
