const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: Number,
  tickets: [TicketSchema],
});

module.exports = mongoose.model('User', UserSchema);