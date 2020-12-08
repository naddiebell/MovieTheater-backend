/* eslint-disable consistent-return */
/* eslint-disable object-curly-newline */
const express = require('express');
const { Screening } = require('../models/screening');

const router = express.Router();

router.get('/:screeningId', async (req, res) => {
  try {
    const aScreening = await Screening.findOne({ _id: req.params.screeningId });

    if (!aScreening) {
      res.status(404).json({ message: 'ticket ID does not exist' });
    } else {
      return res.json(aScreening);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/', async (req, res) => {
  const { filmName, date, filmTime, seats } = req.body;
  try {
    if (filmName && date && filmTime && seats) {
      const screening = new Screening({
        filmName,
        date,
        filmTime,
        seats,
      });
      await screening.save();
      return res.json(screening);
    }
    return res.status(400).json({
      message: 'Please include Film Name, Film Date, filmTime',
    });
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;

// app.use('/api/v1/screenings', screenings);
