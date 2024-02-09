require("dotenv").config();
const express = require("express");

const connectDb = require("./Db");
const userRouter = require("./routes/user.routes");
const stationRouter = require("./routes/station.routes");
const trainRouter = require("./routes/train.routes");
const walletRouter = require("./routes/wallet.routes");
const ticketRouter = require("./routes/ticket.routes");

const app = express();
const PORT = process.env.PORT || 8000;

// WELCOME
app.get("/api", (_req, res) =>
  res.json({ message: "Welcome abroad Samurai Train Services!" })
);

// Connect to MongoDB
connectDb();

// middleware
app.use(express.json());

// Connect Routes
app.use("/api", userRouter);
app.use("/api", stationRouter);
app.use("/api", trainRouter);
app.use("/api", walletRouter);
app.use("/api", ticketRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
