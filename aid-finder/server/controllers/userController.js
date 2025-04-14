import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import {v2 as cloudinary} from 'cloudinary'


//API to register user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // checking that all the field are present
    if (!name || !email || !password) {
      return res.json({ success: false, message: "All fields are required." });
    }

    // validatng email format
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter a valid email" });
    }

    // validatng password
    if (password.length < 8) {
      return res.json({ success: false, message: "Enter a strong password" });
    }

    // hasing user password
    const salt = await bcrypt.genSalt(10);
    const hasedpassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hasedpassword,
    };

    const newUser = new userModel(userData);
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API for user login
const loginUser = async (req, res) => {
  try {

    const {email, password} = req.body;

    const user =await userModel.findOne({email});

    if (!user) {
        return res.json({ success: false, message: "User dose not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET);
        res.json({success:true, token});
    } else {
        res.json({success:false, message: "Invalid Password"});
    }


  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//API to get user profile data
const getProfile = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await userModel.findById(userId);

    res.json({ success: true, userData });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

// API to update user profile data
const updateProfile = async (req, res) => {
  try {
    const { userId, name, phone, address, dob, gender, password } = req.body;
    const imageFile = req.file;

    if (!name || !phone || !dob || !gender) {
      return res.json({ success: false, message: "All fields are required." });
    }

    const updateFields = {
      name,
      phone,
      address: JSON.parse(address),
      dob,
      gender,
      password,
    };

    if (password) {
      const salt = await bcrypt.genSalt(10);
      updateFields.password = await bcrypt.hash(password, salt);
    }

    if (imageFile?.path) {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: 'image',
      });
      updateFields.image = imageUpload.secure_url;
    }

    await userModel.findByIdAndUpdate(userId, updateFields);

    res.json({ success: true, message: "Profile updated successfully" });

  } catch (error) {
    console.log("Update profile error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};


export { registerUser, loginUser, getProfile, updateProfile};
