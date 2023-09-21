const { Router } = require("express");
const router = Router();
const { validateModel } = require("../middlewares");
// const { Character, Film } = require("../database");
const store = require("../database");

router.get("/", (req, res) => {
  res.send("Database is working");
});

router.get("/:model", validateModel, async (req, res) => {
  const { model } = req.params;
  const response = await store[model]?.list();
  res.status(200).json(response);
});

router.get("/:model/:id", validateModel, async (req, res) => {
  const { model, id } = req.params;
  const response = await store[model]?.gett(id);
  res.status(200).json(response);
});

module.exports = router;
