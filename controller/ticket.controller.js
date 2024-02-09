const TicketModel = require("../models/ticket.model");
const TrainModel = require("../models/train.model");

// post ticket:
const addTicket = async (req, res) => {
  try {
    const data = req.body;
    const time_after = data.time_after;

    let current_station = data.station_from;
    let trains = await TrainModel.find({ "stops.station_id": current_station });

    let current_train = null;
    for (let i = 0; i < trains.length; i++) {
      if (compareTime(time_after, trains[i].stops[0].departure_time) === 1)
        current_train = trains[i];
    }

    if (!current_train)
      return res.status(403).json({
        message: `no ticket available for station: ${data.station_from} to station: ${data.station_to}`,
      });

    // res.status(201).json(data);
  } catch (error) {
    res.send({ error });
    console.log(error);
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

module.exports = { addTicket };
