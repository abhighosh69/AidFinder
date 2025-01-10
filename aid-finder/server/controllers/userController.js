import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';

// Update User Profile
export const updateUserProfile = async (req, res) => {
  
  try {
    const userId = req.user.id; // Extracted from JWT in the middleware
    const { phone, address, gender, dob } = req.body;

    // Validate the fields if necessary
    if (phone && !/^\d{10}$/.test(phone)) {
      return res.status(400).json({ message: "Invalid phone number format" });
    }

    // Update the user document
    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      { phone, address, gender, dob },
      { new: true, runValidators: true } // `new` returns the updated document, `runValidators` enforces validation rules
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser); // Respond with updated data
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
