const express = require("express");
require("dotenv").config();
require("./Db/db");

const app = express();

app.get("/", (req, res) => {
  res.send("server running");
});

app.listen(process.env.Port || 5000, () => {
  console.log("server running successfully");
});
