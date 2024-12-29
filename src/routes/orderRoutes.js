const express = require("express");
const { createOrder, getOrderById, getAllOrders } = require("../controllers/orderController");

const router = express.Router();

router.post("/", createOrder);
router.get("/:id", getOrderById);
router.get("/", getAllOrders);

module.exports = router;
