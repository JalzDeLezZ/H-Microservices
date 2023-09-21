const { Schema } = require("mongoose");

const planetSchema = new Schema({
  _id: String,
  name: String,
  rotation_period: String,
  orbital_period: String,
  diameter: String,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  residents: [
    //{ type: String, unique: true },
    {
      type: String,
      ref: "Character",
    },
  ],
  films: [
    {
      type: String,
      ref: "Film",
    },
  ],
});

/* --------------------------------------------------- */
/* %%%%%%%%%%%%%%%%%%%%% METHODS %%%%%%%%%%%%%%%%%%%%% */
/* --------------------------------------------------- */

planetSchema.statics.list = async function () {
  return await this.find()
    .populate("films", ["_id", "title"])
    .populate("residents", ["_id", "name"]);
};

module.exports = planetSchema;
