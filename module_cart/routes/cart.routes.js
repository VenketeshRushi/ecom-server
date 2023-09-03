const express = require("express");
const router = express.Router();

const handleErrors = require("../middleware/handleErrors");
const authorization = require("../../module_auth/middleware/authorization");
const cartController = require("../controllers/CartController");

// HANDLING ERRORS
router.use(authorization);

// ADD PRODUCT TO CART
router.post("/addtocart", cartController.addToCart);

// GET PRODUCTS FROM CART
router.get("/getcart", cartController.getAllCartProducts);

// GET PRODUCTS FROM CART
router.delete("/delete/:id/:cartProductId", cartController.deleteCartProduct);

module.exports = router;
