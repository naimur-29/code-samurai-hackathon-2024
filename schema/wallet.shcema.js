const mongoose = require("mongoose");
const { Schema } = mongoose;

const RechargeSchema = new Schema({
  recharge: {
    type: Number,
    required: true,
  },
});

module.exports = RechargeSchema;
