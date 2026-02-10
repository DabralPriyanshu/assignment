import express from "express";
import ENV from "./config/server.config.js";
import connectDB from "./config/db.config.js";
import userRoutes from "./routes/user.route.js";
import taskRoutes from "./routes/task.route.js";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/tasks", taskRoutes);
app.listen(ENV.PORT, async () => {
  await connectDB();
  console.log(`Server started at port ${ENV.PORT}`);
});
