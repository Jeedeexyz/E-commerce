const express = require("express");
const router = express.Router();
const orderController = require("../controllers/Order");

router.post("/createOrder", orderController.createOrder);
router.get("/orders", orderController.getOrders);
router.delete("/deletebyId", orderController.deleteOrder)
module.exports = router;
