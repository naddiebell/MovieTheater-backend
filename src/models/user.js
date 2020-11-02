/* eslint-disable no-undef */
const mongoose = require('mongoose');
const { schema } = require('./ticket');

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: Number,
  tickets: [schema],
});

module.exports = mongoose.model('User', UserSchema);
