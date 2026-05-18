const jwt = require("jsonwebtoken");
const User = require("../models/User");

// PROTECT MIDDLEWARE
const protect = async (req, res, next) => {
  try {
    let token;
    
    // Check header
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    }
    
    // No token
    if (!token) {
      return res.status(401).json({ 
        success: false, 
        message: "Not authorized, please login again",
        code: "NO_TOKEN"
      });
    }
    
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secretkey");
    
    // Get user
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(401).json({ 
        success: false, 
        message: "User not found",
        code: "USER_NOT_FOUND"
      });
    }
    
    // Check if account is active
    if (!user.isActive) {
      return res.status(401).json({ 
        success: false, 
        message: "Account is deactivated",
        code: "ACCOUNT_INACTIVE"
      });
    }
    
    req.user = user;
    next();
  } catch (error) {
    console.log("AUTH ERROR:", error.message);
    
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ 
        success: false, 
        message: "Invalid token, please login again",
        code: "INVALID_TOKEN"
      });
    }
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ 
        success: false, 
        message: "Session expired, please login again",
        code: "TOKEN_EXPIRED"
      });
    }
    return res.status(401).json({ 
      success: false, 
      message: "Not authorized",
      code: "UNAUTHORIZED"
    });
  }
};

// GENERATE TOKEN
const generateToken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET || "secretkey",
    { expiresIn: process.env.JWT_EXPIRE || "7d" }
  );
};

// Optional: Middleware for role-based access
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "You don't have permission to perform this action"
      });
    }
    next();
  };
};

module.exports = { protect, generateToken, authorize };