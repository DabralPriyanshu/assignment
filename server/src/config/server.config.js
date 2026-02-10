import env from "dotenv";
env.config({ quiet: true });
export default {
  PORT: process.env.PORT || 4000,
  DB_URL: process.env.DB_URL,
  HASH_ROUNDS: process.env.HASH_ROUNDS,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  JWT_EXPIRY: process.env.JWT_EXPIRY,
};
