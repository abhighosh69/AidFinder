import express from "express";
import userModel from "../models/userModel.js"; // Import the User model

const router = express.Router(); // Declare the router

// Update user details
router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { name, phone, gender, dob } = req.body;

  try {
    // Find and update user
    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      { name, phone, gender, dob },
      { new: true, runValidators: true } // Returns the updated document and runs schema validations
    );

    if (updatedUser) {
      res
        .status(200)
        .json({ message: "User updated successfully", user: updatedUser });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
});

export default router; // Use ES module export
