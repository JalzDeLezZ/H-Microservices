const { fn_handler } = require("../utils");

module.exports = {
  getCharacters: fn_handler(require("./getCharacters")),
  getCharacter: fn_handler(require("./getCharacter.js")),
  createCharacter: fn_handler(require("./createCharacter")),
};
