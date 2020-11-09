const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: 'server is running',
  });
});

const users = require('./controllers/users');
const tickets = require('./controllers/tickets');

app.use('/api/v1/users', users);
app.use('/api/v1/tickets', tickets);

module.exports = app;
