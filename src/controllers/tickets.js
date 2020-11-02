const express = require('express');
const { Ticket } = require('../models/ticket');

const router = express.Router();

// get all tickets
router.get('/', async (req, res) => {
  try {
    const allTickets = await Ticket.find();
    if (!allTickets) {
      res.status(204).json({ message: 'No tickets found' });
    } else {
      return res.json(allTickets);
    }
  } catch (err) {
    return res.status(500).send();
  }
});

// get one ticket
router.get('/:ticketId', async (req, res) => {
  try {
    const aTicket = await Ticket.findOne({ _id: req.params.userId });

    if (!aTicket) {
      res.status(404).json({ message: 'user ID does not exist' });
    } else {
      return res.json(aTicket);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

// post a ticket
router.post('/', async (req, res) => {
  const { filmName, dateOfFilm, seatAmount } = req.body;
  try {
    if (filmName && dateOfFilm && seatAmount) {
      const ticket = new Ticket({
        filmName,
        dateOfFilm,
        seatAmount,
      });
      await ticket.save();
      return res.json(ticket);
    }
    return res.status(400).json({
      message: 'Please include Film Name, Film Date, and Number of Tickets',
    });
  } catch (err) {
    return res.status(500).send(err);
  }
});

// patch a ticket


// delete a ticket

module.exports = router;
