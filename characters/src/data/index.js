const charactes = require("./characters.json");

// DB simulation

module.exports = {
  list: async () => {
    return charactes;
  },
  create: async (character) => {
    throw new Error("DB ERROR: Method not implemented");
    // charactes.push(character);
  },
};
