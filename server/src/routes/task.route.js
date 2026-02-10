import express from "express";
import taskController from "../controllers/task.controller.js";
import userMiddlewares from "../middlewares/user.middleware.js";
const taskRouter = express.Router();

taskRouter.post("/create", userMiddlewares.isAuth, taskController.createTask);

export default taskRouter;
