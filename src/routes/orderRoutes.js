const express = require("express");
const { createOrder, getOrderById, getAllOrders, getOrdersBySeller, updateOrderStatus, getOrderByBuyer } = require("../controllers/orderController");
const  verifyToken  = require("../middlewares/authMiddleware");
const authorizeRole = require("../middlewares/authorizeRole");
const router = express.Router();

router.post("/", createOrder);
router.get("/:id", getOrderById);
router.get("/", verifyToken, authorizeRole('admin'), getAllOrders);
router.get("/seller/:sellerId", getOrdersBySeller);
router.put("/seller/order-status", updateOrderStatus);
router.get("/buyer/:buyerId", getOrderByBuyer);

module.exports = router;
