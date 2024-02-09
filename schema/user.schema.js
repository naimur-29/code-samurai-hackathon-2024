const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  user_id: {
    type: Number,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

module.exports = UserSchema;
