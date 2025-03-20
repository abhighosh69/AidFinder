import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
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
    registration_no: {
      type: String,
      required: [true, "Registration number is required"],
      unique: true,
    },
    image: { type: String },
    speciality: { type: String },
    degree: { type: String },
    experience: { type: String },
    about: {
      type: String,
      maxlength: [1000, "About field cannot exceed 1000 characters"],
    },
    available: { type: Boolean, default: true },
    fees: {
      type: Number,
      min: [0, "Fees must be at least 0"],
      max: [100000, "Fees cannot exceed 100,000"],
    },
    address: { type: Object},
    date: { type: String},
    slots_booked: { type: Object, default: {} },
  },
  /* Adding {minimize:false} ensures the slots_booked field remains in the database even if it's empty. */
  { minimize: false, timestamps: true }
);


const doctorModel = mongoose.models.doctor || mongoose.model('doctor', doctorSchema);

export default doctorModel;