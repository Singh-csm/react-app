const express = require("express");
const router = express.Router();
const { createUser, UserLogin } = require("../controllers/userController");

router.route("/createUser").post(createUser);
router.route("/login").post(UserLogin);

module.exports = router;
