const Order = require("../models/orderModel");
const Product = require("../models/productModel"); // Replace with the actual path to your Product model

const deductStock = async (cartItems) => {
  try {
    // Loop through each item in the cart
    for (const item of cartItems) {
      // Find the product and update its stock
      const result = await Product.findOneAndUpdate(
        { _id: item._id }, // Match product by its ID
        { $inc: { stock: -item.quantity } }, // Deduct the quantity
        { new: true } // Return the updated product
      );

      // Check if stock was successfully updated
      if (!result) {
        throw new Error(
          `Failed to update stock for product ID: ${item.product_id}`
        );
      }

      // Optional: Check if stock falls below zero
      if (result.stock < 0) {
        throw new Error(`Product ID: ${item.product_id} is out of stock.`);
      }
    }

    return { success: true, message: "Stock updated successfully" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

const createOrder = async (req, res) => {
  try {
    const { buyer, cartItems, shippingAddress, total } = req.body; // Use buyer_id instead of user

    const newOrder = new Order({
      buyer,
      cartItems,
      shippingAddress,
      total,
    });

    // Deduct stock
    const stockUpdateResult = await deductStock(cartItems);
    if (!stockUpdateResult.success) {
        // Rollback order if stock update fails
        await Order.findByIdAndDelete(savedOrder._id);
        return res.status(400).json({ message: stockUpdateResult.message });
      }

    const savedOrder = await newOrder.save();

   
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: "Failed to create order", error });
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "user cartItems.product"
    );
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch order", error });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user cartItems.product");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders", error });
  }
};

const getOrdersBySeller = async (req, res) => {
  try {
    const sellerId = req.params.sellerId;
    const orders = await Order.find({ "cartItems.user._id": sellerId })
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders", error });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: "Failed to update order status", error });
  }
};

module.exports = { createOrder, getOrderById, getAllOrders, getOrdersBySeller, updateOrderStatus };
