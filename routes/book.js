const express = require("express");
const BookModel = require("../models/book");
const getBooks = require("../controller/getBooks");

const router = express.Router();
router.get("/", async (req, res) => {
  try {
    res.json({ message: "welcome to code samurai 2024 , monir " });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/books", getBooks);

module.exports = router;
