const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/enviroments");

const conn = mongoose.createConnection(MONGO_URI);

const Character = conn.model("Character", require("./schemas/characterSchema"));
const Film = conn.model("Film", require("./schemas/filmSchema"));
const Planet = conn.model("Planet", require("./schemas/planetSchema"));

module.exports = {
  Character,
  Film,
  Planet,
};

// %%%%%%%%%%%%%%%%%%%%%%% TESTS %%%%%%%%%%%%%%%%%%%%%%%

/* Character.find()
  // .populate("films")
  .populate("films", ["_id", "title"])
  .then((characters) => {
    console.log(characters[0]);
  }); */

/* Film.find()
  .populate("planets", ["_id", "name"])
  .then((films) => {
    console.log(films[0]);
  }); */

/* Planet.find()
  .populate("films", ["_id", "title"])
  .then((planets) => {
    console.log(planets[0]);
  }); */

// TEST EXECUTION: node database/src/database/index.js
