
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  stock:{ type: Number, required: true },
  on_sale: { type: Boolean, default: false },
  category: { type: [String], required: true },
  overview: { type: String, required: true },
  prod_info: { type: String, required: true },
  src: { type: String, required: true }, // Image URL or base64 data
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', // Reference to the User model
    required: true 
  },
}, { 
    timestamps: true 
});

module.exports = mongoose.model("Product", productSchema);

