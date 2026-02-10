import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import ENV from "../config/server.config.js";

export const hashPassword = async (password) => {
  return await bcrypt.hash(password, Number(ENV.HASH_ROUNDS));
};

export const comparePassword = async (enteredPassword, storedDbPassword) => {
  return await bcrypt.compare(enteredPassword, storedDbPassword);
};

export const generateToken = async (userData) => {
  return await jwt.sign(userData, ENV.JWT_SECRET_KEY, {
    expiresIn: ENV.JWT_EXPIRY,
  });
};
export const compareToken = async (token) => {
  return await jwt.verify(token, ENV.JWT_SECRET_KEY);
};
