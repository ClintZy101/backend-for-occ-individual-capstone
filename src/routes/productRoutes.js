const express = require("express");
const router = express.Router();
const verifyToken = require('../middlewares/authMiddleware.js')
const authorizeRole = require('../middlewares/authorizeRole.js')
const { addProduct, getAllProducts, getUserProducts } = require("../controllers/productController");

// Route to add a new product
router.post("/add",verifyToken, authorizeRole('admin', 'seller'), addProduct);

// Route to fetch all products
router.get("/", getAllProducts);
router.get("/user-products", verifyToken, getUserProducts);

module.exports = router;
