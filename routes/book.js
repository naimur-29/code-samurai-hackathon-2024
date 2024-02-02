const express = require("express");
const BookModel = require("../models/book");
const getBooks = require("../controller/getBooks");
const addBook = require("../controller/addBook");
const getBook = require("../controller/getBook");

const router = express.Router();
router.get("/", async (req, res) => {
  try {
    res.json({ message: "welcome to code samurai 2024 , monir " });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/books", getBooks);

// get specific book , by id
router.get("/books/:id", getBook);

// add books route
router.post("/books", addBook);

module.exports = router;
