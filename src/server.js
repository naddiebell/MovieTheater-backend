const express = require('express');
const cors = require('cors');

const app = express();

const stripeSK = process.env.STRIPE_TEST_SK;
const stripe = require('stripe')(stripeSK);

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
app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'sek',
          product_data: {
            name: 'filmTitle',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url:'http://google.com',
    cancel_url: 'http://bing.com',
  });
  res.json({ id: session.id });
});

module.exports = app;
