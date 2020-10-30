const mongoose = require('mongoose');

const envFiles = {
    development: '.env',
    test: '.env.test',
};

const connect = async () => {
    const mongoConnectionString = process.env.MONGO_URI;
    try {
        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(mongoConnectionString, opts);
    } catch (err) {
        logger.error(`Fail to connect with database ${mongoConnectionString}`;)
    }
};

module.exports = { connect };