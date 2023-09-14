const charactes = require("./characters.json");

// DB simulation

module.exports = {
  list: async () => {
    return charactes;
  },
  create: async (character) => {
    throw new Error("This is an error :: Create");
    // charactes.push(character);
  },
};
