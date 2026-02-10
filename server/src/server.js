import express from "express";
import ENV from "./config/server.config.js";
import connectDB from "./config/db.config.js";
const app = express();
app.listen(ENV.PORT, async () => {
  await connectDB();
  console.log(`Server started at port ${ENV.PORT}`);
});
