const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  id: {
    type: "Number",
    require: true,
  },
  title: {
    type: "String",
    require: true,
  },
  author: {
    type: "String",
    require: true,
  },
  genre: {
    type: "String",
    require: true,
  },
  price: {
    type: "Number",
    require: true,
  },
});

module.exports = BookSchema;
