const jwt = require("jsonwebtoken");
const userModel = require("../Validation/userModel");

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) return res.status(401).json({ error: "No token" });
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    req.decoded = decoded;
    next();
  } catch (error) {
    res.status(500).json({error: "No data from decoded" });
    console.log("Error from protectRoute:", error.message);
  }
}


exports.protectRoute = protectRoute;
