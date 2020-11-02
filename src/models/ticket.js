const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  filmName: { type: String, required: true },
  dateOfFilm: { type: Date, required: true },
  seatAmount: { type: Number, required: true },
});

module.exports = {
  Ticket: mongoose.model('Ticket', TicketSchema),
  schema: TicketSchema,
};
