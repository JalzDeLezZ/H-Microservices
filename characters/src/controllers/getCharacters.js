const data = require("../data");

module.exports = async (req, res) => {
  const characters = await data.list();
  res.status(200).send(characters);
};
