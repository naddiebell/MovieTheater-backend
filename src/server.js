/* eslint-disable object-curly-newline */
const express = require('express');
const cors = require('cors');

const app = express();

const frontendUrl = process.env.FRONTEND_URL;
const stripeSK = process.env.STRIPE_TEST_SK;
const stripe = require('stripe')(stripeSK);

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: 'server is running',
  });
});

const tickets = require('./controllers/tickets');
const screenings = require('./controllers/screenings');

app.use('/api/v1/tickets', tickets);
app.use('/api/v1/screenings', screenings);

app.post('/create-checkout-session', async (req, res) => {
  const { filmName, price, _id, userEmail } = req.body.ticket;
  const session = await stripe.checkout.sessions.create({
    customer_email: userEmail,
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'sek',
          product_data: {
            name: filmName,
          },
          unit_amount: price,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${frontendUrl}/tickets/${_id}`,
    cancel_url: `${frontendUrl}/unsuccessful`,
  });
  res.json({ id: session.id });
});

module.exports = app;
