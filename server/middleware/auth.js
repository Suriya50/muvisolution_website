const jwt = require("jsonwebtoken");
const User = require("../models/User");

// PROTECT MIDDLEWARE
const protect = async (req, res, next) => {
  try {
    let token;

    // Check header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // No token
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, no token"
      });
    }

    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "secretkey"
    );

    // Get user
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found"
      });
    }

    req.user = user;
    next();

  } catch (error) {
    console.log("AUTH ERROR:", error);

    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        success: false,
        message: "Invalid token"
      });
    }

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token expired"
      });
    }

    return res.status(401).json({
      success: false,
      message: "Not authorized"
    });
  }
};

// GENERATE TOKEN
const generateToken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET || "secretkey",
    {
      expiresIn: process.env.JWT_EXPIRE || "7d"
    }
  );
};

module.exports = { protect, generateToken };