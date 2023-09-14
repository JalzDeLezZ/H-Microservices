const planets = require("./planets.json");

module.exports = {
  findAll: async () => {
    return planets;
  },
};
