const router = require("express").Router();
const { register, login } = require("../controllers/authController");
const { validateUserRegister } = require("../utils/validators");

// Register with validation
router.post("/register", validateUserRegister, register);

// Login
router.post("/login", login);

module.exports = router;