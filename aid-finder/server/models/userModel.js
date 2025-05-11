import mongoose from "mongoose";
import { DEFAULT_USER_IMAGE } from "../config/bas64.js";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [2, "Name must be at least 2 characters long"],
      maxlength: [50, "Name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters long"], 
    },
    image: { type: String, default: DEFAULT_USER_IMAGE },
    address: { type: Object, default: { line1: "", line2: "" } },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other", "Not Selected"], // Allowed values
      default: "Not Selected", // Default values
    },
    dob: { type: String, default: "Not Selected" },
    phone: {
      type: String,
      default: "0000000000",
      match: [/^\d{10}$/, "Invalid phone number format"],
    },
  },
  { timestamps: true }
);

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
