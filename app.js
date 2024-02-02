const express = require("express");
const mongoose = require("mongoose");
const connectDb = require("./Db");
const bookRoutes = require("./routes/book");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Connect Routes
app.use("/api/v1", bookRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// start server
// connectDb.then(()=>{
//     app.listen(PORT, () => {
//         console.log(`Server is running on port ${PORT}`);
//       });
// })
