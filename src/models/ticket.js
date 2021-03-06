const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  filmName: { type: String, required: true },
  date: { type: String, required: true },
  seatAmount: { type: Number, required: true },
  price: { type: Number, required: true },
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  seats: [],
  verified: { type: Boolean, default: false },
});

module.exports = {
  Ticket: mongoose.model('Ticket', TicketSchema),
  schema: TicketSchema,
};
