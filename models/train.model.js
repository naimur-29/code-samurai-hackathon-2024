const mongoose = require("mongoose");
const TrainSchema = require("../schema/train.schema");

const TrainModel = new mongoose.model("Train", TrainSchema);

module.exports = TrainModel;
