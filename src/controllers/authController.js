const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const checkAvailability = async (req, res) => {
  const { username, email } = req.body;
  if (!username || !email) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const userExists = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (userExists) {
      if (userExists.email === email) {
        return res
          .status(400)
          .json({ message: "Email is already registered." });
      }
      if (userExists.username === username) {
        return res.status(400).json({ message: "Username is already taken." });
      }
    }

    return res.status(200).json({ message: "Available." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error." });
  }
};

const register = async (req, res) => {
  try {
    const { username, email, password, role, adminKey } = req.body;

    // Validate input
    if (!username || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }


    // Validate admin key for "admin" role
    if (role === "admin") {
      if (adminKey !== process.env.ADMIN_KEY) {
        return res.status(403).json({ message: "Invalid admin key" });
      }
    }

    // Check if the username already exists
    const userExists = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (userExists) {
      if (userExists.email === email) {
        return res
          .status(400)
          .json({ message: "Email is already registered." });
      }
      if (userExists.username === username) {
        return res.status(400).json({ message: "Username is already taken." });
      }
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // Await the result

    // Create a new user
    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
      role,
    });
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
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  try {
    if (!user) {
      return res.status(404).json({ message: `Email: ${email} not found!` });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: `Invalid credentials.` });
    }
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    const tokenExpiry = new Date(Date.now() + 3600000); // 1 hour from now

    res.status(200).json({ user, token, tokenExpiry });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

module.exports = {
  register,
  login,
  checkAvailability,
};
