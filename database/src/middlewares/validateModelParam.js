const { ClientError } = require("../utils/catchError");

function validateModelParam(req, res, next) {
  const { model } = req.params;
  if (["Character", "Film", "Planet"].includes(model)) {
    next();
  } else {
    throw new ClientError("Model not found", 404);
  }
}

module.exports = {
  validateModelParam,
};
