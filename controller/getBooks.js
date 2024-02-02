const BookModel = require("../models/book");

const getBooks = async (req, res) => {
  try {
    let query = {};
    let sortCriteria = {};

    const { title, author, genre, sort, order } = req.query;

    if (title) query.title = title;
    if (author) query.author = author;
    if (genre) query.genre = genre;

    if (sort) {
      const validSortingFields = ["title", "author", "genre", "price"];
      if (!validSortingFields.includes(sort)) {
        return res.status(400).json({ error: "Invalid sorting field" });
      }

      sortCriteria[sort] = order === "desc" ? -1 : 1;
    } else {
      sortCriteria._id = 1;
    }

    const books = await BookModel.find(query).sort(sortCriteria);

    res.status(200).json({ books: books });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getBooks;
