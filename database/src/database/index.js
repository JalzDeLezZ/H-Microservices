const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/enviroments");

const conn = mongoose.createConnection(MONGO_URI);

const Character = conn.model("Character", require("./schemas/characterSchema"));

Character.find()
  .populate("films")
  .then((characters) => {
    console.log(characters);
  });
