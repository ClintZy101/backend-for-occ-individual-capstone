const express = require("express");
const router = express.Router();
const verifyToken = require('../middlewares/authMiddleware.js')
const authorizeRole = require('../middlewares/authorizeRole.js')
const { addProduct, getAllProducts, getUserProducts, editProduct, getOrders, deleteProduct } = require("../controllers/productController");


router.post("/add",verifyToken, authorizeRole('admin', 'seller'), addProduct);
router.put("/edit/:id",verifyToken, authorizeRole('admin', 'seller'), editProduct);
router.delete("/delete/:id",verifyToken, authorizeRole('admin', 'seller'), deleteProduct);

router.get("/", getAllProducts);
router.get("/user-products", verifyToken, getUserProducts);
router.get("/orders", verifyToken, getOrders);

module.exports = router;
