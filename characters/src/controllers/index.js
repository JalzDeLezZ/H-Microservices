const { fn_handler } = require("../utils");

module.exports = {
  getCharacters: fn_handler(require("./getCharacters")),
  createCharacter: fn_handler(require("./createCharacter")),
};
