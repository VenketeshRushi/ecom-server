const express = require("express");
const router = express.Router();

const authorization = require("../../module_auth/middleware/authorization");
const OrderController = require("../controllers/OrderController");

// HANDLING ERRORS
router.use(authorization);

// TO GET ALL ORDERS
router.get("/getorders", authorization, OrderController.getOrders);

// TO GET ALL USERS
router.get("/getusers", authorization, OrderController.getUsers);

// TO GET ALL ORDERS
router.get("/getproducts", authorization, OrderController.getProducts);

module.exports = router;
