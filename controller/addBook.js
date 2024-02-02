const BookModel = require("../models/book");

const addBook = async (req, res) => {
  try {
    console.log(req.body);
<<<<<<< HEAD
    const data = new BookModel(req.body);
    await data.save();
    console.log(data);
    
=======
    const requestData = req.body;
    const data = new BookModel(requestData);
    console.log(data);
    await data.save();

>>>>>>> 314c8a5a4d6ca5b4c8a44b2d5379d8b386cb4718
    res.send({ message: "add book route " });
  } catch (error) {
    res.send({ error });
    console.log(error);
  }
};

module.exports = addBook;
