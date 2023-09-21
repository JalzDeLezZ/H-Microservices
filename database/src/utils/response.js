function res_handler(res, code, data, message) {
  res.status(code).json({
    error: false,
    message: message || "Success Transaction",
    data,
  });
}

module.exports = {
  res_handler,
};
