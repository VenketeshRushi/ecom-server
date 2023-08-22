const express = require("express");
const router = express.Router();

const authorization = require("../../module_auth/middleware/authorization");
const OrderController = require("../controllers/OrderController");

// HANDLING ERRORS
router.use(authorization);

// TO CREATE ORDER
router.post("/createorder", authorization, OrderController.createOrder);

// TO GET ORDERS
router.get("/getorders", authorization, OrderController.getOrders);

module.exports = router;
