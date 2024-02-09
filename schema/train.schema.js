const mongoose = require("mongoose");
const { Schema } = mongoose;

const StopSchema = new Schema({
  station_id: { type: Number, required: true },
  arrival_time: { type: String },
  departure_time: { type: String },
  fare: { type: Number, required: true },
});

const TrainSchema = new Schema({
  train_id: { type: Number, required: true },
  train_name: { type: String, required: true },
  capacity: { type: Number, required: true },
  stops: [StopSchema],
});

module.exports = TrainSchema;
