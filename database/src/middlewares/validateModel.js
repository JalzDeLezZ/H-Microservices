module.exports = (req, res, next) => {
  const { model } = req.params;
  if (["Character", "Film", "Planet"].includes(model)) {
    next();
  } else {
    res.status(404).json({
      error: true,
      message: "Model not found",
      status: 404,
      data: null,
    });
  }
};
