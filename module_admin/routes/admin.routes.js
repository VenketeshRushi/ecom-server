const express = require("express");
const router = express.Router();

const authorization = require("../../module_auth/middleware/authorization");
const AdminOrderController = require("../controllers/AdminOrderController");

// HANDLING ERRORS
router.use(authorization);

// TO GET ORDERS
router.get("/getorders", authorization, AdminOrderController.getOrders);

module.exports = router;
