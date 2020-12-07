/* eslint-disable no-unused-expressions */
const supertest = require('supertest');
const { expect } = require('chai');
const mongoose = require('mongoose');
const app = require('../../server');
const { connect } = require('../../config/database');
const { Ticket } = require('../../models/ticket');

describe('Testing tickets Endpoints', () => {
  beforeEach(() => {
    connect();
  });

  afterEach(async () => {
    await Ticket.deleteMany();
    await mongoose.connection.close();
  });

  describe('GET /api/v1/tickets', () => {
    it('should return all tickets', async () => {
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

      expect(response.body[0].filmName).to.equal(expectedTicket.filmName);
      expect(response.body[0].date).to.equal(expectedTicket.date);
      expect(response.body[0].seatAmount).to.equal(expectedTicket.seatAmount);
      expect(response.body[0].price).to.equal(expectedTicket.price);
      expect(response.body[0].userName).to.equal(expectedTicket.userName);
      expect(response.body[0].userEmail).to.equal(expectedTicket.userEmail);
    });
  });

  describe('GET /api/v1/tickets/:ticketId', () => {
    it('should return a ticket by id', async () => {
      const expectedTicket = new Ticket({
        filmName: 'Tenet',
        date: 'Saturday October 21, 2362',
        seatAmount: 3,
        price: 3200,
        userName: 'Natalie Whitton',
        userEmail: 'natalie@example.com',
      });
      await expectedTicket.save();

      const id = expectedTicket._id.toString();

      const response = await supertest(app)
        .get(`/api/v1/tickets/${id}`)
        .expect(200);

      expect(response.body._id).to.equal(id);
    });

    it('should return "ticket ID does not exit" if the ticket ID is invalid', async () => {
      const id = '5f71df69851ee00000000d5f';

      await supertest(app)
        .get(`/api/v1/tickets/${id}`)
        .expect(404, { message: 'ticket ID does not exist' });
    });
  });

  describe('POST /api/v1/tickets', () => {
    it('should save a ticket to the database', async () => {
      const response = await supertest(app)
        .post('/api/v1/tickets')
        .send({
          filmName: 'The Secret Garden',
          date: 'Saturday October 21, 2362',
          seatAmount: 3,
          price: 3200,
          userName: 'Natalie Whitton',
          userEmail: 'natalie@example.com',
        })
        .expect(200);

      const foundTicket = await Ticket.findOne({ _id: response.body._id });
      const foundTicketId = foundTicket._id.toString();

      expect(response.body._id).to.equal(foundTicketId);
      expect(response.body.filmName).to.equal(foundTicket.filmName);
      expect(response.body.date).to.equal(foundTicket.date);
      expect(response.body.seatAmount).to.equal(foundTicket.seatAmount);
      expect(response.body.price).to.equal(foundTicket.price);
      expect(response.body.userName).to.equal(foundTicket.userName);
      expect(response.body.userEmail).to.equal(foundTicket.userEmail);
    });

    it('should return 400 if Film Name, date, seatAmount, userName, userEmail and price are not included', async () => {
      await supertest(app)
        .post('/api/v1/tickets')
        .send({
          filmName: 'A Clockwork Orange',
          date: 'Saturday October 21, 2362',
          seatAmount: 2,
        })
        .expect(400);
    });
  });

  describe('PUT /api/v1/tickets/:ticketId/validate', () => {
    it('should validate a ticket', async () => {
      const expectedTicket = new Ticket({
        filmName: 'The Secret Garden',
        date: 'Saturday October 21, 2362',
        seatAmount: 3,
        price: 3200,
        userName: 'Natalie Whitton',
        userEmail: 'natalie@example.com',
        verified: false,
      });
      await expectedTicket.save();

      const id = expectedTicket._id.toString();

      const response = await supertest(app)
        .put(`/api/v1/tickets/${id}/validate`)
        .expect(200);
      expect(response.body.verified).to.be.true;
    });
  });
});
