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

const editUser = async (req, res) => {
  const { id } = req.params;
  const updatedUserData = req.body;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user data
    Object.keys(updatedUserData).forEach((key) => {
      user[key] = updatedUserData[key];
    });

    await user.save();

    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Server error. Could not update user." });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.deleteOne();

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error.message);
    res.status(500).json({ message: "Server error. Could not delete user." });
  }
};

module.exports = { getAllUsers, editUser, deleteUser };
