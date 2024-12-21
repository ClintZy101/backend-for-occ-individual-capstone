const express = require("express");
const router = express.Router();
const verifyToken = require('../middlewares/authMiddleware.js')
const authorizeRole = require('../middlewares/authorizeRole.js')
const { addProduct, getAllProducts, getUserProducts, editProduct, getOrders } = require("../controllers/productController");

// Route to add a new product
router.post("/add",verifyToken, authorizeRole('admin', 'seller'), addProduct);
router.put("/edit/:id",verifyToken, authorizeRole('admin', 'seller'), editProduct);
// Route to fetch all products
router.get("/", getAllProducts);
router.get("/user-products", verifyToken, getUserProducts);
router.get("/orders", verifyToken, getOrders);

module.exports = router;
