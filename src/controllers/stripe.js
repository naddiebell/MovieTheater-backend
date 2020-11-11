/* eslint-disable prettier/prettier */
const express = require('express');

const secretStripeKey = process.env.STRIPE_TEST_SK;
const stripe = require('../config/stripe')(secretStripeKey);

async function postCharge(req, res) {
  try {
    // eslint-disable-next-line camelcase
    const { amount, source, receipt_email } = req.body;

    const charge = await stripe.charges.create({
      amount,
      currency: 'sek',
      source,
      receipt_email,
    });

    if (!charge) throw new Error('charge unsuccessful');

    res.status(200).json({
      message: 'charge posted successfully',
      charge,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = postCharge;
