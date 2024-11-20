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
    image: { type: String, required: [true, "Profile image is required"] },
    speciality: { type: String, required: [true, "Speciality is required"] },
    degree: { type: String, required: [true, "Degree is required"] },
    experience: { type: String, required: [true, "Experience is required"] },
    about: {
      type: String,
      required: [true, "About field is required"],
      maxlength: [100, "About field cannot exceed 100 characters"],
    },
    available: { type: Boolean, required: [true, "Availability is required"] },
    fees: {
      type: Number,
      required: [true, "Consultation fee is required"],
      min: [0, "Fees must be at least 0"],
      max: [100000, "Fees cannot exceed 100,000"],
    },
    address: { type: Object, required: [true, "Address is required"] },
    date: { type: String, required: [true, "Date is required"] },
    slots_booked: { type: Object, default: {} },
  },
  { minimize: false, timestamps: true }
);


const doctorModel = mongoose.models.doctor || mongoose.model('doctor', doctorSchema);

export default doctorModel;
