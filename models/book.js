const mongoose = require('mongoose');
const BookSchema = require('../models/book');

const BookModel = mongoose.model("Book", BookSchema);

module.exports = BookModel;
