import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import jwt from "jsonwebtoken";

//api for add doctor
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      registration_no,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;
    const imageFile = req.file;

    // check for all the data to add doctor
    if (
      !name ||
      !email ||
      !password ||
      !registration_no ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address ||
      !imageFile
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // validate email
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email" });
    }

    // validate password
    if (password.length < 8) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Password must be at least 8 characters",
        });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // upload image to cooudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imageUrl = imageUpload.secure_url;

    // save doctor to database
    const doctorData = {
      name,
      email,
      image: imageUrl,
      password: hashedPassword,
      registration_no,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: JSON.parse(address),
      date: Date.now(),
    };

    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();

    res
      .status(201)
      .json({ success: true, message: "Doctor added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API for admin login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, message: "Login success", token });
    } else {
      res.json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API to get all doctors list in admin dashboard

const allDoctors = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select("-password");
    res.json({ success: true, doctors });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addDoctor, adminLogin, allDoctors };
