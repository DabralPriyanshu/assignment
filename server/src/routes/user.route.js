import express from "express";
import userController from "../controllers/user.controller.js";
import userMiddlewares from "../middlewares/user.middleware.js";
const userRouter = express.Router();

userRouter.post(
  "/register",
  userMiddlewares.validateRegistrationRequest,
  userController.register,
);
userRouter.post("/login", userController.login);

export default userRouter;
