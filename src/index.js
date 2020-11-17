/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
const { connect } = require('./config/database');
const app = require('./server');

connect();

// eslint-disable-next-line prefer-destructuring
const PORT = process.env.PORT;
app.listen(process.env.PORT, () => console.log(`Running on Port ${PORT} `));
