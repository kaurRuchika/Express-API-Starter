const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const taskRoutes = require("./routes/tasks");
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Express API Starter!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
