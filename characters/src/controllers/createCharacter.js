const data = require("../data");
const { res_handler } = require("../utils");

module.exports = async (req, res) => {
  console.log(req.body);
  const character = await data.create(req.body);
  res_handler(res, 201, character);
};
