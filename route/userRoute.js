const express = require("express");
const { createUser, loginUser } = require("../controller/userController");
const router = express.Router();

router.route("/registration").post(createUser);
router.route("/login").post(loginUser);

module.exports = router;
