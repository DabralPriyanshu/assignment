import express from "express";
import ENV from "./config/server.config.js";
const app = express();
app.listen(ENV.PORT, () => {
  console.log(`Server started at port ${ENV.PORT}`);
});
