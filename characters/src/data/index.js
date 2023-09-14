const charactes = require("./characters.json");

module.exports = {
  list: async () => {
    return charactes;
  },
};
