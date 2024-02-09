const mongoose = require("mongoose");
const StationSchema = require("../schema/station.schema");

const StationModel = new mongoose.model("Station", StationSchema);

module.exports = StationModel;
