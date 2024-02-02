const express = require("express");
const mongoose = require("mongoose");
const connectDb = require("./Db");
const bookRoutes = require("./routes/book");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/mydatabase")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// middleware
app.use(express.json());

// Connect Routes
app.use("/api/v1", bookRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
