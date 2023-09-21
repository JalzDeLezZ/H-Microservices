const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/", (req, res) => {
  res.send("Database is running");
});

module.exports = app;
