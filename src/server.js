const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'server is running',
  });
});

const users = require("./controllers/users");
const tickets = require("./controllers/tickets");

app.use('/api/v1/users', users);
app.use('api/v1/users/:userId/tickets', tickets);

module.exports = app;
