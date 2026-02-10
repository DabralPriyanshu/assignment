const validateRegistrationRequest = async (req, res, next) => {
  try {
    if (!req.body.name) {
      return res
        .status(400)
        .json({ message: "Name field is required", data: {} });
    }
    if (req.body.name.length < 3) {
      return res.status(400).json({
        message: "Name should be  more than 2 character long",
        data: {},
      });
    }
    if (!req.body.password) {
      return res
        .status(400)
        .json({ message: "Password field is required", data: {} });
    }
    if (!req.body.email) {
      return res
        .status(400)
        .json({ message: "Email field is required", data: {} });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error", data: {} });
  }
};

export default {
  validateRegistrationRequest,
};
