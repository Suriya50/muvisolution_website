const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { protect, generateToken } = require("../middleware/auth");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: "Please provide all required fields: name, email, password" 
      });
    }
    
    if (password.length < 6) {
      return res.status(400).json({ 
        success: false, 
        message: "Password must be at least 6 characters" 
      });
    }
    
    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        success: false, 
        message: "User already exists with this email" 
      });
    }
    
    // Create user
    const user = await User.create({ name, email, password });
    
    // Generate token
    const token = generateToken(user._id);
    
    res.status(201).json({ 
      success: true, 
      message: "Registered successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        initials: user.initials
      }
    });
  } catch (error) {
    console.log("REGISTER ERROR:", error);
    
    // Handle duplicate key error
    if (error.code === 11000) {
      return res.status(400).json({ 
        success: false, 
        message: "Email already registered" 
      });
    }
    
    res.status(500).json({ 
      success: false, 
      message: process.env.NODE_ENV === 'development' ? error.message : "Registration failed" 
    });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Validation
    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: "Please provide email and password" 
      });
    }
    
    // Find user
    const user = await User.findOne({ email }).select("+password +failedLoginAttempts +lockUntil");
    
    if (!user) {
      return res.status(401).json({ 
        success: false, 
        message: "Invalid email or password" 
      });
    }
    
    // Check if account is locked
    if (user.isLocked()) {
      const minutesLeft = Math.ceil((user.lockUntil - Date.now()) / 60000);
      return res.status(401).json({ 
        success: false, 
        message: `Account is locked. Please try again in ${minutesLeft} minutes` 
      });
    }
    
    // Check password
    const isMatch = await user.comparePassword(password);
    
    if (!isMatch) {
      await user.incrementLoginAttempts();
      const attemptsLeft = 5 - user.failedLoginAttempts;
      return res.status(401).json({ 
        success: false, 
        message: `Invalid password. ${attemptsLeft} attempts remaining` 
      });
    }
    
    // Reset login attempts on successful login
    await user.resetLoginAttempts();
    
    // Update last login
    user.lastLogin = new Date();
    await user.save();
    
    // Generate token
    const token = generateToken(user._id);
    
    res.json({ 
      success: true, 
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        lastLogin: user.lastLogin,
        initials: user.initials
      }
    });
  } catch (error) {
    console.log("LOGIN ERROR:", error);
    res.status(500).json({ 
      success: false, 
      message: process.env.NODE_ENV === 'development' ? error.message : "Login failed" 
    });
  }
});

// GET CURRENT USER (PROTECTED)
router.get("/me", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password -failedLoginAttempts -lockUntil");
    res.json({ 
      success: true, 
      user: {
        ...user.toJSON(),
        initials: user.initials
      }
    });
  } catch (error) {
    console.log("GET USER ERROR:", error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to fetch user data" 
    });
  }
});

// UPDATE PROFILE (PROTECTED)
router.put("/update-profile", protect, async (req, res) => {
  try {
    const { name, email } = req.body;
    const userId = req.user._id;
    
    // Prepare update object
    const updateData = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    
    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ 
        success: false, 
        message: "No fields to update" 
      });
    }
    
    // Check if email is already taken by another user
    if (email && email !== req.user.email) {
      const existingUser = await User.findOne({ email, _id: { $ne: userId } });
      if (existingUser) {
        return res.status(400).json({ 
          success: false, 
          message: "Email already in use by another account" 
        });
      }
    }
    
    // Update user
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updateData,
      { new: true, runValidators: true }
    ).select("-password -failedLoginAttempts -lockUntil");
    
    res.json({ 
      success: true, 
      message: "Profile updated successfully",
      user: {
        ...updatedUser.toJSON(),
        initials: updatedUser.initials
      }
    });
  } catch (error) {
    console.log("UPDATE PROFILE ERROR:", error);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(e => e.message);
      return res.status(400).json({ 
        success: false, 
        message: messages.join(', ') 
      });
    }
    
    res.status(500).json({ 
      success: false, 
      message: "Failed to update profile" 
    });
  }
});

// CHANGE PASSWORD (PROTECTED)
router.put("/change-password", protect, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    
    // Validation
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ 
        success: false, 
        message: "Please provide current and new password" 
      });
    }
    
    if (newPassword.length < 6) {
      return res.status(400).json({ 
        success: false, 
        message: "New password must be at least 6 characters" 
      });
    }
    
    const user = await User.findById(req.user._id).select("+password");
    
    // Check current password
    const isMatch = await user.comparePassword(currentPassword);
    if (!isMatch) {
      return res.status(400).json({ 
        success: false, 
        message: "Current password is incorrect" 
      });
    }
    
    // Update password
    user.password = newPassword;
    user.passwordChangedAt = new Date();
    await user.save();
    
    // Generate new token
    const token = generateToken(user._id);
    
    res.json({ 
      success: true, 
      message: "Password changed successfully",
      token
    });
  } catch (error) {
    console.log("CHANGE PASSWORD ERROR:", error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to change password" 
    });
  }
});

// DELETE ACCOUNT (PROTECTED)
router.delete("/delete-account", protect, async (req, res) => {
  try {
    const userId = req.user._id;
    
    // Soft delete - set isActive to false
    await User.findByIdAndUpdate(userId, { 
      isActive: false,
      email: `deleted_${Date.now()}_${req.user.email}`
    });
    
    res.json({ 
      success: true, 
      message: "Account deactivated successfully" 
    });
  } catch (error) {
    console.log("DELETE ACCOUNT ERROR:", error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to delete account" 
    });
  }
});

// LOGOUT (just a helper endpoint, token removal happens on client)
router.post("/logout", protect, async (req, res) => {
  res.json({ 
    success: true, 
    message: "Logged out successfully" 
  });
});

module.exports = router;