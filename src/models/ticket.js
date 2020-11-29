const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  filmName: { type: String, required: true },
  dateOfFilm: { type: Date, required: true },
  seatAmount: { type: Number, required: true },
  userName: { String },
  userEmail: { String }
});

module.exports = {
  Ticket: mongoose.model('Ticket', TicketSchema),
  schema: TicketSchema,
};
