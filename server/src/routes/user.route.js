import express from "express";
import userController from "../controllers/user.controller.js";
import userMiddlewares from "../middlewares/user.middleware.js";
const userRouter = express.Router();

userRouter.post(
  "/register",
  userMiddlewares.validateRegistrationRequest,
  userController.register,
);
userRouter.post(
  "/login",
  userMiddlewares.validateLoginRequest,
  userController.login,
);
userRouter.post("/logout", userMiddlewares.isAuth, userController.logout);

export default userRouter;
