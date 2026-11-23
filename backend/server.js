const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test API
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Nestora backend is running",
  });
});

const PORT = process.env.PORT || 5000;

// Database connect aanathukku piragu server start pannuvom
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

startServer();
