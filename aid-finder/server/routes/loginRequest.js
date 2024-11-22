import express from "express";
import passport from "passport";
import userModel from "../models/userModel.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<a href='/auth/google'>Login</a>");
});

// Google Authentication
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

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});


export default router;