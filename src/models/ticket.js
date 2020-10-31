const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  filmName: { type: String, required: true },
  name: { type: String, required: true },
  active: { type: Boolean, required: true },
  seatNumber: { type: Boolean, required: true },
});

module.exports = mongoose.model('Ticket', TicketSchema);
