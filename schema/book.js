const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
	title: String
});

module.exports = BookSchema;
