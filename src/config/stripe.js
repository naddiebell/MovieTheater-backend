 stripe = require('stripe');

stripe.config({
  api_key: process.env.STRIPE_TEST_PK,
  api_secret: process.env.STRIPE_TEST_SK,
});

module.exports = stripe;
