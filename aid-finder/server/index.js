import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import sessionMiddleware from "./middlewares/sessionMiddleware.js";
import passportMiddleware from "./middlewares/passportMiddleware.js";
import "./controllers/authController.js";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";



dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB & Cloudinary
connectDB();
connectCloudinary();

// Apply Session Middleware
app.use(sessionMiddleware);

// Apply Passport Middleware
passportMiddleware(app);

app.use(express.json());
app.use(cors());

// api endpoints
app.use('/api/admin',adminRouter) //localhost:8080/api/admin/add-doctor

app.use('/api/doctor',doctorRouter);

app.use('/api/user', userRouter);

// Set up Routes
app.use(authRoutes);




app.listen(port, () => {
  console.log(`The app listening on port http://localhost:${port}`);
});
