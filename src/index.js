/* eslint-disable prettier/prettier */
const { connect } = require('./config/database');
const app = require('./server');

connect();
// eslint-disable-next-line no-console
app.listen(5709, () => console.log('Running on Port 5709'));
