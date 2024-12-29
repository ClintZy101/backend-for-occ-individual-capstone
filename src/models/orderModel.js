const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    buyer_id: {type: String, required:true},
    cartItems: [
      {
        _id: { type: String, required: true },
        title: { type: String, required: true },
        price: { type: Number, required: true },
        stock: { type: Number, required: true },
        category: { type: [String], required: true },
        prod_info: { type: String, required: true },
        src: { type: String, required: true },
      },
    ],
    shippingAddress: {
      name: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    total: { type: String, required: true },
    status: { type: String, default: "Pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);

