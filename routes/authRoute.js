const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/register", authController.registerUser); //create user
router.post("/login", authController.loginUser); //login

module.exports = router;
