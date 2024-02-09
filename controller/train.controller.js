const TrainModel = require("../models/train.model");

// post train:
const addTrain = async (req, res) => {
  try {
    const data = req.body;
    await TrainModel.create(data);

    const response = {
      train_id: data.train_id,
      train_name: data.train_name,
      capacity: data.capacity,
      service_start: data.stops[0].departure_time,
      service_ends: data.stops[data.stops.length - 1].arrival_time,
      num_stations: data.stops.length,
    };

    res.status(201).json(response);
  } catch (error) {
    res.send({ error });
    console.log(error);
  }
};

module.exports = { addTrain };
