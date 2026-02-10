import env from "dotenv";
env.config({ quiet: true });
export default {
  PORT: process.env.PORT || 4000,
  DB_URL: process.env.DB_URL,
  HASH_ROUNDS: process.env.HASH_ROUNDS,
};
