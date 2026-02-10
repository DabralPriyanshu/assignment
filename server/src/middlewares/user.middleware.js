import { compareToken } from "../utils/index.js";
import User from "../models/user.model.js";

const validateRegistrationRequest = async (req, res, next) => {
  try {
    if (!req.body.name) {
      return res
        .status(400)
        .json({ message: "Name field is required", data: {} });
    }
    if (req.body.name.length < 3) {
      return res.status(400).json({
        message: "Name should be  more than 2 character long",
        data: {},
      });
    }
    if (!req.body.password) {
      return res
        .status(400)
        .json({ message: "Password field is required", data: {} });
    }
    if (!req.body.email) {
      return res
        .status(400)
        .json({ message: "Email field is required", data: {} });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error", data: {} });
  }
};
const validateLoginRequest = async (req, res, next) => {
  try {
    if (!req.body.password) {
      return res
        .status(400)
        .json({ message: "Password field is required", data: {} });
    }
    if (!req.body.email) {
      return res
        .status(400)
        .json({ message: "Email field is required", data: {} });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error", data: {} });
  }
};

const isAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({ message: "Token not present", data: {} });
    }
    const decoded = await compareToken(token);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(401).json({ message: "Invalid token", data: {} });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    if (error.name == "TokenExpiredError") {
      return res
        .status(401)
        .json({ message: "Invalid expire token", data: {} });
    } else if (error.name == "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token", data: {} });
    } else {
      return res
        .status(500)
        .json({ message: "Internal server error", data: {} });
    }
  }
};

export default {
  validateRegistrationRequest,
  validateLoginRequest,
  isAuth,
};
