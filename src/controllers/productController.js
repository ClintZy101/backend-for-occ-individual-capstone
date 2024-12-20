const Product = require("../models/productModel.js");
const User = require('../models/userModel.js');

// Add a new product
// const addProduct = async (req, res) => {
//   try {
//     const { title, price, on_sale, category, overview, prod_info, src } = req.body;
//     const userId = req.user.id; // Get user ID from the authenticated user (e.g., from JWT)

//     // Create a new product
//     const newProduct = new Product({
//       title,
//       price,
//       on_sale,
//       category,
//       overview,
//       prod_info,
//       src,
//       user: userId, // Associate the product with the user
//     });

//     // Save the product to the database
//     await newProduct.save();

//     res.status(201).json({ message: "Product added successfully!", product: newProduct });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

const addProduct = async (req, res) => {
  try {
    const { title, price, on_sale, category, overview, prod_info, src } = req.body;
    const userId = req.user.id; // Get user ID from the authenticated user (e.g., from JWT)

    // Create a new product
    const newProduct = new Product({
      title,
      price,
      on_sale,
      category,
      overview,
      prod_info,
      src,
      user: userId, // Associate the product with the user
    });

    // Save the product to the database
    await newProduct.save();

    // Populate user details (email and username)
    const populatedProduct = await Product.findById(newProduct._id).populate("user", "id email username");

    res.status(201).json({ message: "Product added successfully!", product: populatedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


// Get products for the logged-in user
const getUserProducts = async (req, res) => {
  try {
    // Ensure the user is authenticated
    if (!req.user || !req.user.id) {
      return res.status(400).json({ message: "User is not authenticated" });
    }

    // Fetch products by the logged-in user's ID
    const userProducts = await Product.find({ user: req.user.id });

    if (userProducts.length === 0) {
      return res.status(404).json({ message: "No products found for this user" });
    }

    res.status(200).json({ products: userProducts });
  } catch (error) {
    console.error("Error fetching user products:", error);
    res.status(500).json({ message: "Error fetching products" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    // Fetch all products and populate the user field
    const products = await Product.find().populate("user", "username email");

    // Log the products to verify the data
    console.log("Fetched products with user details:", products);

    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server error. Could not fetch products." });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getUserProducts,
};
