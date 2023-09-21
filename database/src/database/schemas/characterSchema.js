const { Schema } = require("mongoose");
const { ClientError } = require("../../utils/catchError");

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
  homeworld: { type: String, ref: "Planet" },
  films: [
    {
      type: String,
      ref: "Film",
    },
  ],
}, {timestamps: true})

/* --------------------------------------------------- */
/* %%%%%%%%%%%%%%%%%%%%% METHODS %%%%%%%%%%%%%%%%%%%%% */
/* --------------------------------------------------- */

characterSchema.statics.list = async function () {
  return await this.find()
    .populate("films", ["_id", "title"])
    .populate("homeworld", ["_id", "name"]);
};

characterSchema.statics.gett = async function (_id) {
  // return this.findById(_id) //* SUCCESFUL
  return await this.findOne({ _id }) //* SUCCESFUL
    .populate("films", ["_id", "title"])
    .populate("homeworld", ["_id", "name"]);
};

characterSchema.statics.insert = async function (data) {
  const { _id } = data;
  const character = await this.findOne({ _id });
  if (character) {
    throw new ClientError("Character already exists", 409);
  }
  return await this.create(data);
};

module.exports = characterSchema;
