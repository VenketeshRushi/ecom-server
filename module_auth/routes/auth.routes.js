const express = require("express");
const router = express.Router();

const handleErrors = require("../middleware/handleErrors");

const authorization = require("../middleware/authorization");

const RegisterController = require("../controllers/RegisterController");
const LoginController = require("../controllers/LoginController");

// HANDLING ERRORS
router.use(handleErrors);

// REGISTER NEW USER
router.post("/register", RegisterController.register);

// LOGIN USING EMAIL/PASSWORD
router.post("/login", LoginController.login);

module.exports = router;
