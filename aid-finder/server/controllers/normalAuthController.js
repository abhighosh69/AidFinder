import userModel from "../models/userModel.js";
import doctorModel from "../models/doctorModel.js";
import JWT from "jsonwebtoken";

// Signup controller
export const signup = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Validate role
    if (role !== "user" && role !== "doctor") {
      return res
        .status(400)
        .json({ message: "Invalid role. Role must be 'user' or 'doctor'" });
    }

    // Save data to the appropriate model based on the role
    let createdUser;
    if (role === "user") {
      // Create a new user
      createdUser = await userModel.create({ name, email, password });
    } else if (role === "doctor") {
      createdUser = await doctorModel.create({ name, email, password });
    } else {
      return res.status(400).json({ message: "Invalid role specified" });
    }
    res
      .status(201)
      .json({ message: "User created successfully", user: createdUser });
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .json({ message: "Error creating user", error: err.message });
  }
};

export const login = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    if (!email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Validate role
    if (role !== "user" && role !== "doctor") {
      return res
        .status(400)
        .json({ message: "Invalid role. Role must be 'user' or 'doctor'" });
    }

    // Determine the model based on the role
    const model = role === "user" ? userModel : doctorModel;

    // Find the user or doctor by email
    const user = await model.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "No record found" });
    }

    // Compare passwords
    if (user.password !== password) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const jwtToken = JWT.sign(
      { email: user.email, id: user.id }, 
      process.env.JWT_SECRET, 
      { expiresIn: "24h" },
    );
    

    // Login successful
    res.status(200).json({ message: "Login successful",jwtToken, email, name:user.name });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error logging in", error: err.message });
  }
};
