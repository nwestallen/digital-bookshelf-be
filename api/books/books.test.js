const request = require('supertest');
const server = require('../server');
const db = require('../../data/db-config');

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

describe('books', () => {

  describe('[GET] /api/books/:user_id', () => {
    it('[1] responds with status 200 when user_id exists', async () => {
      const res = await request(server).get('/api/books/1');
      expect(res.status).toBe(200);
    });
    it('[2] responds with list of book data when user_id exists', async () => {
      const res = await request(server).get('/api/books/2');
      expect(res.body[0]).toMatchObject({ book_title: 'Infinite Jest', book_color: 'gray' });
    });
    it('[3] responds with status 400 when user_id does not exist', async () => {
      const res = await request(server).get('/api/books/999');
      expect(res.status).toBe(400);
    });
    it('[4] responds with appropriate error message when user_id does not exist', async () => {
      const res = await request(server).get('/api/books/999');
      expect(res.body.message).toMatch(/user_id 999 does not exist/);
    });
  });

  describe('[GET] /api/books/:user_id/library', () => {
    it('[5] responds with status 200 user_id exists', async () => {
      const res = await request(server).get('/api/books/1/library');
      expect(res.status).toBe(200);
    });
    it('[6] responds with nested library data when user_id exists', async () => {
      const res = await request(server).get('/api/books/2/library');
      expect(res.body[0]).toMatchObject({ case_id: 3 })
    });
    it('[7] responds with status 400 when user_id does not exist', async () => {
      const res = await request(server).get('/api/books/999/library');
      expect(res.status).toBe(400);
    });
    it('[8] responds with appropriate error message when user_id does not exist', async () => {
      const res = await request(server).get('/api/books/999/library');
      expect(res.body.message).toMatch(/user_id 999 does not exist/);
    });
  });

  describe('[POST] /api/books/:user_id', () => {
    it('[9] responds with status 201 when successful', async () => {
      const res = await request(server).post('/api/books/2').send({ book_title: 'The Way Things Work', book_author: 'David Macaulay'});
      expect(res.status).toBe(201);
    });
    it('[10] successfully creates a new record in the books table', async () => {
      await request(server).post('/api/books/2').send({ book_title: 'The Way Things Work', book_author: 'David Macaulay' });
      const newBook = await db('books').where('book_id', 6).first();
      expect(newBook).toMatchObject({ book_title: 'The Way Things Work', book_id: 6 })
    });
  });

});