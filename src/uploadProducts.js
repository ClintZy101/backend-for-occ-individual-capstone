const mongoose = require("mongoose");
require("dotenv").config();

// MongoDB Connection String
const MONGO_URI = process.env.MONGO_URI;

// Product Schema
const productSchema = new mongoose.Schema({
  id: Number,
  title: String,
  src: String,
  price: Number,
  stock: Number,
  on_sale: Boolean,
  category: [String],
  overview: String,
  prod_info: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Assuming you have a User model
  }, // Associate product with a specific admin user
});

const Product = mongoose.model("Product", productSchema);

// Product Data
const products = [
  {
    id: 1,
    title: "Float Headphones 1200 Wireless",
    src: " https://static.wixstatic.com/media/c837a6_b32d4982345746bfae73477bc8d103d1~mv2.jpg/v1/fill/w_1166,h_1166,q_90/c837a6_b32d4982345746bfae73477bc8d103d1~mv2.webp",
    price: 120,
    stock: 200,
    on_sale: false,
    category: ["headphones"],
    overview:
      "This is the space to describe the product. Write a short overview that includes important features, pricing and other relevant info for a potential buyer.",
    prod_info:
      "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
  },
  {
    id: 2,
    title: "Balo Flip Smartphone 10G, 128GB",
    src: "https://static.wixstatic.com/media/c837a6_0ca8178bd9474bb18492d0a615c89244~mv2.jpg/v1/fill/w_1166,h_1166,q_90/c837a6_0ca8178bd9474bb18492d0a615c89244~mv2.webp",
    price: 573.75,
    stock: 100,
    on_sale: true,
    category: ["smartphones", "sale"],
    overview:
      "This is the space to describe the product. Write a short overview that includes important features, pricing and other relevant info for a potential buyer.",
    prod_info:
      "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
  },
  {
    id: 3,
    title: "OLed Flat Screen TV",
    src: "https://static.wixstatic.com/media/c837a6_5c1f5bc9afd64d4081427286d737b1cc~mv2.jpg/v1/fill/w_1166,h_1166,q_90/c837a6_5c1f5bc9afd64d4081427286d737b1cc~mv2.webp",
    price: 2000.75,
    stock: 50,
    on_sale: false,
    category: ["homeappliances", "bestsellers", "homeappliances"],
    overview:
      "This is the space to describe the product. Write a short overview that includes important features, pricing and other relevant info for a potential buyer.",
    prod_info:
      "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
  },
  {
    id: 4,
    title: "Turn5 Portable Bluetooth Speaker With Handle",
    src: "https://static.wixstatic.com/media/c837a6_6ae0d6ed130649499c8e12f74293bbcb~mv2.jpg/v1/fill/w_1166,h_1166,q_90/c837a6_6ae0d6ed130649499c8e12f74293bbcb~mv2.webp",
    price: 160.5,
    stock: 150,
    on_sale: true,
    category: ["speakers", "homeappliances", "sale"],
    overview:
      "This is the space to describe the product. Write a short overview that includes important features, pricing and other relevant info for a potential buyer.",
    prod_info:
      "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
  },
  {
    id: 5,
    title: "Ove Tablet FD Plus - 10.3, 32GB",
    src: "https://static.wixstatic.com/media/c837a6_e93aaaab05de41718cd93f05246c6bd3~mv2.jpg/v1/fill/w_1166,h_1166,q_90/c837a6_e93aaaab05de41718cd93f05246c6bd3~mv2.webp",
    price: 800.0,
    stock: 100,
    on_sale: true,
    category: ["smartphones", "homeappliances", "sale"],
    overview:
      "This is the space to describe the product. Write a short overview that includes important features, pricing and other relevant info for a potential buyer.",
    prod_info:
      "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
  },
  {
    id: 6,
    title: "Space Moon Smartwatch With Charger",
    src: "https://static.wixstatic.com/media/c837a6_bd5306fa74cd4c2aa9b1ee61920d43d1~mv2.jpg/v1/fill/w_1166,h_1166,q_90/c837a6_bd5306fa74cd4c2aa9b1ee61920d43d1~mv2.webp",
    price: 500.0,
    stock: 200,
    on_sale: false,
    category: ["watches", "bestsellers", "accessories"],
    overview:
      "This is the space to describe the product. Write a short overview that includes important features, pricing and other relevant info for a potential buyer.",
    prod_info:
      "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
  },
  {
    id: 7,
    title: "Space Buds True Wireless Earbud Headphones",
    src: "https://static.wixstatic.com/media/c837a6_ec125da6ecf54d83b11fb2c04488595b~mv2.jpg/v1/fill/w_1166,h_1166,q_90/c837a6_ec125da6ecf54d83b11fb2c04488595b~mv2.webp",
    price: 150.0,
    stock: 200,
    on_sale: false,
    category: ["headphones", "bestseller", "accessories"],
    overview:
      "This is the space to describe the product. Write a short overview that includes important features, pricing and other relevant info for a potential buyer.",
    prod_info:
      "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
  },
  {
    id: 8,
    title: "OVE Light Space 5G Smartphone, 128GB",
    src: "https://static.wixstatic.com/media/c837a6_2f21decab65b4faf8b3d7a4e1dfa505b~mv2.jpg/v1/fill/w_1166,h_1166,q_90/c837a6_2f21decab65b4faf8b3d7a4e1dfa505b~mv2.webp",
    price: 750.0,
    stock: 100,
    on_sale: false,
    category: ["smartphones"],
    overview:
      "This is the space to describe the product. Write a short overview that includes important features, pricing and other relevant info for a potential buyer.",
    prod_info:
      "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
  },
  {
    id: 9,
    title: "360 Mini Portable Speaker",
    src: "https://static.wixstatic.com/media/c837a6_3ab8ad4eb79b43b7a1d83896f234a8cc~mv2.jpg/v1/fill/w_1166,h_1166,q_90/c837a6_3ab8ad4eb79b43b7a1d83896f234a8cc~mv2.webp",
    price: 200.0,
    stock: 200,
    on_sale: false,
    category: ["speakers", "homeappliances"],
    overview:
      "This is the space to describe the product. Write a short overview that includes important features, pricing and other relevant info for a potential buyer.",
    prod_info:
      "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
  },
  {
    id: 10,
    title: "Ove Touchscreen Laptop - 15.6”, 256 GB",
    src: "https://static.wixstatic.com/media/c837a6_ecc3e1e491d648ecba1952a137a8e391~mv2.jpg/v1/fill/w_1166,h_1166,q_90/c837a6_ecc3e1e491d648ecba1952a137a8e391~mv2.webp",
    price: 1600.0,
    stock: 100,
    on_sale: false,
    category: ["homeappliances", "bestsellers"],
    overview:
      "This is the space to describe the product. Write a short overview that includes important features, pricing and other relevant info for a potential buyer.",
    prod_info:
      "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
  },
  {
    id: 11,
    title: "Balo Headphones 700 Wireless",
    src: "https://static.wixstatic.com/media/c837a6_81ed35be13394d12b3592f8670731d33~mv2.jpg/v1/fill/w_1166,h_1166,q_90/c837a6_81ed35be13394d12b3592f8670731d33~mv2.webp",
    price: 200.0,
    stock: 200,
    on_sale: false,
    category: ["headphones", "accessories"],
    overview:
      "This is the space to describe the product. Write a short overview that includes important features, pricing and other relevant info for a potential buyer.",
    prod_info:
      "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.",
  },
];

// Function to upload products
const uploadProducts = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    // Admin ObjectId: clint-admin
    const adminId = new mongoose.Types.ObjectId("6785f211ceb5bd6fed9c8070");

    // Add `user` field to all products
    const productsWithUser = products.map((product) => ({
      ...product,
      user: adminId,
    }));

    // Insert products into MongoDB
    await Product.insertMany(productsWithUser);
    console.log("Products uploaded successfully!");

    // Close connection
    mongoose.connection.close();
  } catch (error) {
    console.error("Error uploading products:", error);
    mongoose.connection.close();
  }
};

uploadProducts();
