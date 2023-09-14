module.exports = (req, res, next) => {
  const { name, height, weight, history } = req.body;
  if (!name || !height) {
    return res.status(400).json({
      error: "Missing required fields",
    });
  }
  if (typeof name !== "string") {
    return res.status(400).json({
      error: "Name must be a string",
    });
  }
  if (typeof height !== "number") {
    return res.status(400).json({
      error: "Height must be a number",
    });
  }
  next();
};
