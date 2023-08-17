const express = require("express");
const router = express.Router();

const handleErrors = require("../middleware/handleErrors");
const authorization = require("../../module_auth/middleware/authorization");
const productController = require("../controllers/UserController");

// HANDLING ERRORS
router.use(handleErrors);

// GET ALL PRODUCTS
router.post("/register", authorization, productController.getAllProducts);

// GET SPECIFIC CATEGORY PRODUCTS
router.post("/login", authorization, productController.async);

module.exports = router;
