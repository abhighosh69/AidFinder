import express from "express";
import dotenv from "dotenv";

import authLoginRoutes from "./routes/loginRequest.js";
import sessionMiddleware from "./middlewares/sessionMiddleware.js";
import passportMiddleware from "./middlewares/passportMiddleware.js";
import "./controllers/authController.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Apply Session Middleware
app.use(sessionMiddleware);

// Apply Passport Middleware
passportMiddleware(app);

// Set up Routes
app.use(authLoginRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
