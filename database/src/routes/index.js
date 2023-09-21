const { Router } = require("express");
const router = Router();
const { validateModelParam } = require("../middlewares/validateModelParam");
const database_fn = require("../database");
const { res_handler } = require("../utils/response");
const catchedAsync = require("../utils/catchedAsync");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Star Wars API!!!",
  });
});

router.get(
  "/:model",
  validateModelParam,
  catchedAsync(async (req, res) => {
    const { model } = req.params;
    const response = await database_fn[model]?.list();
    res_handler(res, 200, response, "List of characters");
  })
);

router.get(
  "/:model/:id",
  validateModelParam,
  catchedAsync(async (req, res) => {
    const { model, id } = req.params;
    const response = await database_fn[model]?.gett(id);
    res_handler(res, 200, response);
  })
);

router.post(
  "/:model",
  validateModelParam,
  catchedAsync(async (req, res) => {
    const { model } = req.params;
    const response = await database_fn[model]?.insert(req.body);
    res_handler(res, 201, response);
  })
);

module.exports = router;
