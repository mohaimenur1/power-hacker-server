const express = require("express");
const router = require("./route/userRoute");
require("dotenv").config();
require("./Db/db");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);

// app.get("/", (req, res) => {
//   res.send("server running");
// });

app.listen(process.env.Port || 5000, () => {
  console.log("server running successfully");
});
