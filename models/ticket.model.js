const mongoose = require("mongoose");
const TicketSchema = require("../schema/ticket.schema");

const TicketModel = new mongoose.model("Ticket", TicketSchema);

module.exports = TicketModel;
