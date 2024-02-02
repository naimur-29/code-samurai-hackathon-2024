const BookModel = require("../models/book");

const getBooks = async (req, res) => {
  try {
    res.send({ message: "get all books " });
  } catch (error) {
    res.send({ error });
  }
};

module.exports = getBooks;
