const express = require("express");
const { createOrder, getOrderById, getAllOrders , getOrdersBySeller, updateOrderStatus} = require("../controllers/orderController");

const router = express.Router();

router.post("/", createOrder);
router.get("/:id", getOrderById);
router.get("/", getAllOrders);
router.get("/seller/:sellerId", getOrdersBySeller);
router.put("/seller/order-status", updateOrderStatus);


module.exports = router;
