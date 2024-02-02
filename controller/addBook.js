const BookModel = require("../models/book");

const addBook = async (req, res) => {
  try {
    console.log(req.body);
    const data = await BookModel.create(req.body);
    console.log(data);

    res.status(201).json(data);
  } catch (error) {
    res.send({ error });
    console.log(error);
  }
};

module.exports = addBook;
