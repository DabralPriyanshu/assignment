import express from "express";
import ENV from "./config/server.config.js";
import connectDB from "./config/db.config.js";
import userRoutes from "./routes/user.route.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/users", userRoutes);
app.listen(ENV.PORT, async () => {
  await connectDB();
  console.log(`Server started at port ${ENV.PORT}`);
});
