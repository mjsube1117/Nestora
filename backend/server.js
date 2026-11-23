const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Frontend requests allow pannum
app.use(cors());

// JSON request body read pannum
app.use(express.json());

// Test API
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Nestora backend is running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
