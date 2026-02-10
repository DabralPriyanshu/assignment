import Task from "../models/task.model.js";
const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = await Task.create({ title, description, user: req.user._id });
    return res
      .status(201)
      .json({ message: "Task created successfully", data: task });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      data: {},
    });
  }
};
const getAllTask = async (req, res) => {
  try {
    const task = await Task.find();
    return res.status(201).json({ message: "Fetched all task", data: task });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      data: {},
    });
  }
};

export default {
  createTask,
  getAllTask,
};
