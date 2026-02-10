import express from "express";
import taskController from "../controllers/task.controller.js";
import userMiddlewares from "../middlewares/user.middleware.js";
import taskMiddlewares from "../middlewares/task.middleware.js";
const taskRouter = express.Router();

taskRouter.post(
  "/create",
  userMiddlewares.isAuth,
  taskMiddlewares.validateCreateTaskRequest,
  taskController.createTask,
);
taskRouter.get("/", userMiddlewares.isAuth, taskController.getAllTask);
taskRouter.get("/:id", userMiddlewares.isAuth, taskController.getTaskById);
taskRouter.delete("/:id", userMiddlewares.isAuth, taskController.deleteTask);
taskRouter.patch("/:id", userMiddlewares.isAuth, taskController.updateTask);

export default taskRouter;
