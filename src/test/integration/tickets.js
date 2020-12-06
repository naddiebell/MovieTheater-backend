const supertest = require('supertest');
const { expect } = require('chai');
const mongoose = require('mongoose');
const app = require('../../server');
const { connect } = require('../../config/database');
const { Ticket } = require('../../models/ticket');

describe('Testing Users Endpoints', () => {
  beforeEach(() => {
    connect();
  });

  afterEach(async () => {
    await Ticket.deleteMany();
    await mongoose.connection.close();
  });

  describe('GET /api/v1/tickets', () => {
    it('should return all users', async () => {
      const expectedTicket = new Ticket({
        filmName: 'Mulan',
        date: 'Sunday November 19, 2028',
        seatAmount: 3,
        price: 3200,
        userName: 'Natalie Whitton',
        userEmail: 'natalie@example.com',
      });
      await expectedTicket.save();

      const response = await supertest(app).get('/api/v1/tickets').expect(200);
      console.log(response.body);

      expect(response.body[0].filmName).to.equal(expectedTicket.filmName);
      expect(response.body[0].date).to.equal(expectedTicket.date);
      expect(response.body[0].seatAmount).to.equal(expectedTicket.seatAmount);
      expect(response.body[0].price).to.equal(expectedTicket.price);
      expect(response.body[0].userName).to.equal(expectedTicket.userName);
      expect(response.body[0].userEmail).to.equal(expectedTicket.userEmail);
    });
  });
});
