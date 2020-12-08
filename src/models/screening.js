const mongoose = require('mongoose');

const ScreeningSchema = new mongoose.Schema({
  filmName: { type: String, required: true },
  date: { type: String, required: true },
  filmTime: { type: String, required: true },
  seats: [],
});

module.exports = {
  Screening: mongoose.model('Screening', ScreeningSchema),
  schema: ScreeningSchema,
};
