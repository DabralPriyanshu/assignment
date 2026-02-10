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
    const task = await Task.find({ user: req.user._id });
    return res.status(200).json({ message: "Fetched all task", data: task });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      data: {},
    });
  }
};
const getTaskById = async (req, res) => {
  try {
    const id = req.params?.id;
    if (!id) {
      return res.status(400).json({ message: "Task id missing", data: {} });
    }
    const task = await Task.findById(id);
    return res
      .status(200)
      .json({ message: "Successfully fetched a task", data: task });
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
  getTaskById,
};
