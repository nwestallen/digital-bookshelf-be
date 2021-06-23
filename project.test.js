const request = require('supertest');
const server = require('./api/server');
const db = require('./data/db-config');

it('sanity check', () => {
  expect(true).not.toBe(false);
});