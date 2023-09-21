const { Schema } = require("mongoose");

const characterSchema = new Schema({
  // _id: Shema.Types.ObjectId,
  _id: String,
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  homeworld: { type: String, ref: "Planet" }, // PLANET ID REFERENCE
  films: [
    {
      type: String,
      ref: "Film",
    },
  ], // FILMS ID REFERENCE
});

module.exports = characterSchema;
