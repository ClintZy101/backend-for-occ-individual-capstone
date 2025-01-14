const User = require("../models/userModel.js");

const getAllUsers = async (req, res) => {
  try {
    // Fetch all users 
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error. Could not fetch users." });
  }
};

module.exports = { getAllUsers };
