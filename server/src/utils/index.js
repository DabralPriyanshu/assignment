import bcrypt from "bcryptjs";
import ENV from "../config/server.config.js";

export const hashPassword = async (password) => {
  return await bcrypt.hash(password, Number(ENV.HASH_ROUNDS));
};

export const comparePassword = async (enteredPassword, storedDbPassword) => {
  return await bcrypt.compare(enteredPassword, storedDbPassword);
};
