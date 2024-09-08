// Import necessary modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const candidateModel = require("./models/candidate");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/candidate")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Secret key for JWT (In a real-world scenario, store it securely, e.g., in environment variables)
const JWT_SECRET = "your_jwt_secret_key";

// Signup route
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user already exists
  const existingUser = await candidateModel.findOne({ email: email });
  if (existingUser) {
    return res.status(400).json({ error: "User already exists" });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the user
  const newUser = new candidateModel({
    name,
    email,
    password: hashedPassword,
  });

  newUser.save()
    .then(user => res.status(201).json({ message: "User registered successfully", user }))
    .catch(err => res.status(500).json({ error: "Failed to register user", details: err }));
});

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = await candidateModel.findOne({ email: email });
  if (!user) {
    return res.status(400).json({ error: "No user found with this email" });
  }

  // Compare the password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ error: "Invalid password" });
  }

  // Generate JWT token
  const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ message: "Login successful", token });
});

// Protected route to get user data
app.get("/user", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  
  // Verify token
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized access" });
    }

    // Find user by decoded ID
    candidateModel.findById(decoded.id)
      .then(user => res.json(user))
      .catch(err => res.status(500).json({ error: "Failed to fetch user data", details: err }));
  });
});

// Route to get all candidates
app.get("/api/candidates", (req, res) => {
  candidateModel.find()
    .then(candidates => res.json(candidates))
    .catch(err => res.status(500).json({ error: "Failed to fetch candidates", details: err }));
});

// Start the server
app.listen(3001, () => {
  console.log("Server connected on port 3001");
});
