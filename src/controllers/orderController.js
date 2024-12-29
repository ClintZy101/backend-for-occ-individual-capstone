const Order = require("../models/orderModel");

const createOrder = async (req, res) => {
    try {
      const { buyer_id, cartItems, shippingAddress, total } = req.body; // Use buyer_id instead of user
  
      const newOrder = new Order({
        buyer_id, // Match schema field name
        cartItems,
        shippingAddress,
        total,
      });
  
      const savedOrder = await newOrder.save();
      res.status(201).json(savedOrder);
    } catch (error) {
      res.status(500).json({ message: "Failed to create order", error });
    }
  };
  

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("user cartItems.product");
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

module.exports = { createOrder, getOrderById, getAllOrders };

