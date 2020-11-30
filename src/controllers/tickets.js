/* eslint-disable consistent-return */
/* eslint-disable object-curly-newline */
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

// // get one ticket
router.get('/:ticketId', async (req, res) => {
  console.log('aaaaaaaaaa', req);
  console.log('paarrammmss', req.params);
  // const { id } = req.params.ticketId;
  // if (id) {
  //   console.log('theres an id');
  // }
  if (req.query.payment == 'success') {
    console.log("bbbbbbbbb")
    await Ticket.updateOne(
      { _id: req.params.ticketId, 'tickets._id': req.params.ticketId },
      console.log("ccccccc", req.ticketId),
      {
        $set: {
          'tickets.$.success': true,
        },
      }
    );
  }

  try {
    const aTicket = await Ticket.findOne({ _id: req.params.ticketId });

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
  const { filmName, date, seatAmount, userName, userEmail, price } = req.body;
  try {
    if (filmName && date && seatAmount && userName && userEmail && price) {
      const ticket = new Ticket({
        filmName,
        date,
        seatAmount,
        price,
        userName,
        userEmail,
      });
      await ticket.save();
      return res.json(ticket);
    }
    return res.status(400).json({
      message:
        'Please include Film Name, Film Date, Number of Tickets, user Name, userEmail and price',
    });
  } catch (err) {
    return res.status(500).send(err);
  }
});

// patch a ticket

// delete a ticket

module.exports = router;
