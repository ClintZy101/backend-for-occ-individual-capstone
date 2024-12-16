const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const register = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Validate input
    if (!email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the username already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists!" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // Await the result

    // Create a new user
    const newUser = new User({ email: email, password: hashedPassword, role });
    await newUser.save();

    res
      .status(201)
      .json({ message: `User registered with the email: ${email}` });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
    console.error(error);
  }
};


const login = async (req, res) => {
  const {  email, password } = req.body;
  //    we use .findOne method because it is already stated that the username should be unique in userModel.js
  const user = await User.findOne({  email });
  try {
    if (!user) {
      // 404 = not found
      return res
        .status(404)
        .json({ message: `Email: ${email} not found!` });
    }
    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch) {
      // client error
      return res.status(400).json({ message: `Invalid credentials.` });
    }
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token });
  } catch (error) {}
};

module.exports = {
  register,
  login,
};
