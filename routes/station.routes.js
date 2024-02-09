const express = require("express");
const {
  getStations,
  addStation,
  getTrains,
} = require("../controller/station.controller");

const router = express.Router();

router.get("/stations", getStations);
router.post("/stations", addStation);
router.get("/stations/:station_id/trains", getTrains);

module.exports = router;
