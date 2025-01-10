// ------- This File is for Google Authentication -------

import express from "express";
import passport from "passport";
import { signup, login } from "../controllers/normalAuthController.js";


const router = express.Router();

// Home Route (for testing purposes)
router.get("/", (req, res) => {
  res.send("<a href='/auth/google'>Login with Google</a>");
});

// ------- Google Authentication -------
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google Callback
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("http://localhost:5173/home");
  }
);

// Profile Route
router.get("/profile", (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`Welcome ${req.user.displayName}`);
  } else {
    res.redirect("/");
  }
});

// Logout Route
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});


router.post("/signup", signup);
router.post("/login", login);



export default router;