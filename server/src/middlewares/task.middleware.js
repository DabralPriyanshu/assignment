const validateCreateTaskRequest = async (req, res, next) => {
  try {
    if (!req.body.title) {
      return res
        .status(400)
        .json({ message: "Title field is required", data: {} });
    }
    if (!req.body.description) {
      return res
        .status(400)
        .json({ message: "Description field is required", data: {} });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error", data: {} });
  }
};
export default {
  validateCreateTaskRequest,
};
