const request = require('supertest');
const server = require('./api/server');
const db = require('./data/db-config');

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});
beforeEach(async () => {
  await db.seed.run();
});
afterAll(async () => {
  await db.destroy();
});

it('sanity check', () => {
  expect(true).not.toBe(false);
});

describe('server.js', () => {
  describe('[GET] /api/books/:user_id', () => {
    it('[1] responds with status 200 when user_id exists', async () => {
      const res = await request(server).get('/api/books/1');
      expect(res.status).toBe(200);
    });
  });
});