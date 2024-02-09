const StationModel = require("../models/station.model");
const TrainModel = require("../models/train.model");

// get stations:
const getStations = async (_req, res) => {
  try {
    const stations = await StationModel.find();
    const response = [];
    stations.forEach((ele) => {
      response.push({
        station_id: ele.station_id,
        station_name: ele.station_name,
        longitude: ele.longitude,
        latitude: ele.latitude,
      });
    });
    response.sort((a, b) => a.station_id - b.station_id);

    res.status(200).json({ stations: response });
  } catch (error) {
    res.send({ error });
    console.log(error);
  }
};

// post stations:
const addStation = async (req, res) => {
  try {
    const data = req.body;
    StationModel.create(data);

    res.status(201).json(data);
  } catch (error) {
    res.send({ error });
    console.log(error);
  }
};

// get all the trains that'll stop at this station:
const getTrains = async (req, res) => {
  try {
    const stationId = req.params.station_id;

    const station = await StationModel.findOne({ station_id: stationId });
    if (!station)
      return res
        .status(404)
        .json({ message: `station with id: ${stationId} was not found` });

    const trains = await TrainModel.find({ "stops.station_id": stationId });

    const response = [];
    trains.forEach((data) => {
      let arrival_time = null;
      let departure_time = null;

      data.stops.forEach((stop) => {
        if (stop.station_id === Number(stationId)) {
          arrival_time = stop.arrival_time;
          departure_time = stop.departure_time;
        }
      });

      response.push({
        train_id: data.train_id,
        arrival_time,
        departure_time,
      });
    });

    response.sort((a, b) => {
      const departureTimeComparison = compareTime(
        a.departure_time,
        b.departure_time
      );
      if (departureTimeComparison !== 0) return departureTimeComparison;

      const arrivalTimeComparison = compareTime(a.arrival_time, b.arrival_time);
      if (arrivalTimeComparison !== 0) return arrivalTimeComparison;

      return a.train_id - b.train_id;
    });

    res.status(200).json({
      station_id: stationId,
      trains: response,
    });
  } catch (error) {
    console.error("Error retrieving trains:", error);
    res.status(500).json({ error: "Internal server error" });
  }

  function compareTime(timeA, timeB) {
    if (!timeA && !timeB) return 0;
    if (!timeA) return -1;
    if (!timeB) return 1;

    const [hoursA, minutesA] = timeA.split(":").map(Number);
    const [hoursB, minutesB] = timeB.split(":").map(Number);

    if (hoursA === hoursB) {
      return minutesA - minutesB;
    }

    return hoursA - hoursB;
  }
};

module.exports = { getStations, addStation, getTrains };
