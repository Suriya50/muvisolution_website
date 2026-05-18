const express = require("express");
const router = express.Router();
const User = require("../models/User");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    console.log("REGISTER BODY:", req.body); // debug

    // check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }

    // create user
    const user = await User.create({
      name,
      email,
      password
    });

    res.status(201).json({
      success: true,
      message: "Registered successfully",
      user
    });

  } catch (error) {
    console.log("REGISTER ERROR ", error); // show real error

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});


// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("LOGIN BODY:", req.body); // debug

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found"
      });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid password"
      });
    }

    res.json({
      success: true,
      message: "Login successful",
      user
    });

  } catch (error) {
    console.log("LOGIN ERROR ", error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;