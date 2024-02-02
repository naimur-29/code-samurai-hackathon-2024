const BookModel = require("../models/book");

const addBook = async (req, res) => {
  try {
    console.log(req.body);

    res.send({ message: "add book route " });
  } catch (error) {
    res.send({ error });
    console.log(error);
  }
};

module.exports = addBook;
