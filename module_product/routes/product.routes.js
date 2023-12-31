const express = require("express");
const router = express.Router();

const handleErrors = require("../middleware/handleErrors");
const authorization = require("../../module_auth/middleware/authorization");
const productController = require("../controllers/ProductController");

// HANDLING ERRORS
router.use(handleErrors);

// GET ALL PRODUCTS
router.get("/getallproducts", productController.getAllProducts);

// GET SPECIFIC CATEGORY PRODUCTS
router.get("/getfourproducts", productController.getProductsByVerity);

// GET SINGLE PRODUCTS
router.get("/getsingleproduct/:id", productController.getSingleProduct);

//ADD TO CART
router.post("/add/:id", productController.addToFavorite);

//CREATE PRODUCT
router.post("/add", productController.addProduct);

//FILTER PRODUCTS
router.post("/getfilterdproducts", productController.filterProducts);

//SEARCHED PRODUCTS
router.get("/getsearchedproduct", productController.getSearchedProducts);

// ADD REVIEW TO PRODUCT
router.post("/addreview", productController.addReview);

module.exports = router;
