const { Router } = require("express");
const router = Router();

const { Character, Film } = require("../database");

router.get("/", (req, res) => {
  res.send("Database is working");
});

router.get("/characters", async (req, res) => {
  const characters = await Character.list();
  res.json(characters);
});

router.get("/characters/:_id", async (req, res) => {
  const { _id } = req.params;
  const character = await Character.gett(_id);
  res.json(character);
});

router.post("/characters", async (req, res) => {
  const character = await Character.insert(req.body);
  res.json(character);
});

router.get("/films", async (req, res) => {
  const films = await Film.list();
  res.json(films);
});

module.exports = router;
