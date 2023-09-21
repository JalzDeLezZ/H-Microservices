const { Router } = require("express");
const router = Router();
const { validateModelParam } = require("../middlewares/validateModelParam");
const database_fn = require("../database");
const catchedAsync = require("../utils/catchedAsync");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Star Wars API!!!",
  });
});

// :model > //! Character | Planet | Film

router.get(
  "/:model",
  validateModelParam,
  catchedAsync(async (req, res) => {
    const { model } = req.params;
    const response = await database_fn[model]?.list();
    res.send(response);
  })
);

router.get(
  "/:model/:id",
  validateModelParam,
  catchedAsync(async (req, res) => {
    const { model, id } = req.params;
    const response = await database_fn[model]?.gett(id);
    res.send(response);
  })
);

router.post(
  "/:model",
  validateModelParam,
  catchedAsync(async (req, res) => {
    const { model } = req.params;
    const response = await database_fn[model]?.insert(req.body);
    res.send(response);
  })
);

module.exports = router;
