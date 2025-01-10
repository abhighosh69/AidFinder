import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import sessionMiddleware from "./middlewares/sessionMiddleware.js";
import passportMiddleware from "./middlewares/passportMiddleware.js";
import "./controllers/authController.js";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

import userRoutes from "./routes/userRoutes.js";  // Import routes file

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB & Cloudinary
connectDB();
connectCloudinary();

// Apply Session Middleware
app.use(sessionMiddleware);

app.use(express.json());
app.use(cors());

// Apply Passport Middleware
passportMiddleware(app);

// Set up Routes
app.use(authRoutes);

// Register the routes
app.use(userRoutes);


app.listen(port, () => {
  console.log(`The app listening on port http://localhost:${port}`);
});
