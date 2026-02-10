import User from "../models/user.model.js";
import {
  hashPassword,
  generateToken,
  comparePassword,
} from "../utils/index.js";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User with this email already present",
        data: {},
      });
    }
    const hashedPassword = await hashPassword(req.body.password);
    user = await User.create({ name, email, password: hashedPassword });
    const token = await generateToken({ id: user._id });
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 2 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      message: "User registered successfully",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error", data: {} });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
        data: {},
      });
    }
    const isPasswordCorrect = await comparePassword(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid credentials",
        data: {},
      });
    }
    const token = await generateToken({ id: user._id });
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 2 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "User Logged in  successfully",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error", data: {} });
  }
};
const logout = (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      maxAge: 0,
    });

    return res.status(200).json({
      message: "Logout successful",
      data: {},
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      data: {},
    });
  }
};

export default {
  register,
  login,
  logout,
};
