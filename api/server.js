const express = require('express');

const server = express();
const bookRouter = require('./books/books-router');

server.use(express.json());
server.use('/api/books', bookRouter);

module.exports = server;