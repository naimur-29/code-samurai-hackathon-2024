const mongoose = require("mongoose");
const BookSchema = require("../schema/book");

const BookModel = new mongoose.model("Book", BookSchema);

module.exports = BookModel;
